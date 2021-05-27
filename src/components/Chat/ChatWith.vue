<template>
    <div>
        <div class="mf-history"
             v-show="loading">
            <div v-for="(item, index) in received_messages">
                <div
                        class="recipient wrapper-chat-with-rec"
                        v-if="item.sender.id!==$store.state.auth.user.id">
                    <div class="rec-pi-avatar">
                        <img :src="backendUrl + 'files/' + item.sender.fileDB.id"
                             v-if="item.sender.fileDB">
                        <img src="../../assets/images/user.svg" v-else>
                    </div>
                    <div class="message-rec">
                        <p v-html="item.message"></p>
                    </div>
                </div>
                <div
                        :class="{'sender wrapper-chat-with-sen': changeView === false,
          'recipient wrapper-chat-with-rec': changeView === true}"
                        v-if="item.sender.id===$store.state.auth.user.id">
                    <div class="message-sen"
                         v-if="changeView === false">
                        <p v-html="item.message"></p>
                    </div>
                    <div
                            :class="{'sen-pi-avatar': changeView === false,
                      'rec-pi-avatar': changeView === true}">
                        <img :src="backendUrl + 'files/' + $store.state.auth.user.fileDB.id"
                             v-if="$store.state.auth.user.fileDB">
                        <img src="../../assets/images/user.svg" v-else>
                    </div>
                    <div class="message-rec"
                         v-if="changeView === true">
                        <p v-html="item.message"></p>
                    </div>
                </div>
            </div>
            <div id="bottom"></div>
        </div>
        {{filesSize}}
        <form @dragenter.prevent.stop="targetFile = true"
              @dragover.prevent.stop="targetFile = true"
              class="form-mf-message">
            <div class="mf-message">
                <div
                        class="label-text">
                    <div style="display: inline-block" @click="targetFile = !targetFile">qwe</div>
          <textarea @keydown.enter.exact.prevent
                    @keydown.enter.shift.exact="newline"
                    @keyup.enter.exact="send"
                    class="chat-message"
                    v-if="loading && (!targetFile)"
                    v-model="send_message"></textarea>
                </div>
                <label class="label-send"
                       for="send">
                    <button
                            @click.prevent="send"
                            class="btn btn-default"
                            id="send"
                            type="submit"
                    >
                    </button>
                </label>
                <label @dragleave.prevent.stop="targetFile=false"
                       @drop.prevent.stop="targetFile=false"
                       class="label-send"
                       for="files"
                       style="padding: 5px"
                       v-show="targetFile || filesSize">
                    <input @change="handleFileUploads" class="chat-message-file"
                           id="files" multiple ref="files"
                           type="file">
                </label>
            </div>
        </form>
        <div class="content-center"
             v-show="!loading">
            <LoadingLdsRipple/>
        </div>
    </div>
</template>

<script>
    import SockJS from "sockjs-client";
    import Stomp from "webstomp-client";
    import backendUrl from "../../store/backendUrl";
    import axios from "axios";
    import authHeader from "../../services/auth-header";
    import getTimestampDate from "../../js/getTimestampDate";
    import LoadingLdsRipple from "../Loading/LoadingLdsRipple"

    export default {
        props: ['changeView'],
        components: {
            LoadingLdsRipple
        },
        data() {
            return {
                received_messages: [],
                send_message: null,
                connected: false,
                backendUrl: '',
                chat: [],
                chatId: '',
                r_m: '',
                loading: false,
                chatIdObj: Object,
                targetFile: false,
                filesSize: 0
            };
        },
        async mounted() {
            this.connect();
            this.backendUrl = backendUrl();
            this.r_m = await axios.get(backendUrl() + 'api/chat/messages/' + this.$route.params.chatId,
                {
                    headers: authHeader()
                });
            this.chatIdObj = await axios.get(backendUrl() + 'api/chat/one/' + this.$route.params.chatId,
                {
                    headers: authHeader()
                });
            this.loading = true;
            this.received_messages = this.sortedChatMessages;
            // var container = document.querySelector(".mf-history");
            // var scrollHeight = container.scrollHeight;
            // container.scrollTop = scrollHeight;
            // this.scrollToEnd();
        },
        updated() {
            // this.scrollToEnd();
        },
        methods: {
            handleFileUploads() {
                this.files = this.$refs.files.files;
                this.filesSize = this.files.length;
            },
            scrollToEnd() {
                var container = document.querySelector(".mf-history");
                var scrollHeight = container.scrollHeight;
                container.scrollTop = scrollHeight;
            },
            send() {
                console.log("Send message:" + this.send_message);
                if (this.stompClient && this.stompClient.connected) {
                    const msg = {
                        message: this.send_message,
                        chatId: this.$route.params.chatId,
                        userId: this.$store.state.auth.user.id,
                        sendDate: new Date().getTime()
                    };
                    // console.log(JSON.stringify(msg));
                    this.stompClient.send("/app/chat/" + this.chatId, JSON.stringify(msg), {});
                    const msg_notification = {
                        id: null,
                        type: "Message from ",
                        message: this.send_message,
                        linkToChat: this.$route.path,
                        fromUserId: this.$store.state.auth.user.id,
                        userId: this.$route.params.recipientId
                    };
                    // console.log(JSON.stringify(msg_notification));
                    let toUser;
                    if (this.chatIdObj.data.sender.id !== this.$store.state.auth.user.id) {
                        toUser = Number.parseInt(this.chatIdObj.data.sender.id);
                    } else {
                        toUser = Number.parseInt(this.chatIdObj.data.recipient.id);
                    }
                    this.stompClient.send("/app/notification/" + toUser, JSON.stringify(msg_notification), {});
                }
                this.$store.dispatch('fetchChat');
            },
            connect() {
                this.chatId = this.$route.params.chatId;
                this.socket = new SockJS(backendUrl() + "gs-guide-websocket");
                this.stompClient = Stomp.over(this.socket);
                this.stompClient.debug = () => {
                };

                this.stompClient.connect(
                    {},
                    frame => {
                        this.connected = true;
                        // console.log(frame);
                        this.stompClient.subscribe("/topic/chat/" + this.chatId, tick => {
                            // console.log(tick);
                            let message = JSON.parse(tick.body);
                            this.received_messages.push(message);
                            this.$store.dispatch('fetchChat');
                        });
                    },
                    error => {
                        // console.log(error);
                        this.connected = false;
                    }
                );
            },
            disconnect() {
                if (this.stompClient) {
                    this.stompClient.disconnect();
                }
                this.connected = false;
            },
            tickleConnection() {
                this.connected ? this.disconnect() : this.connect();
            }
        },
        computed: {
            sortedChatMessages: function () {
                function compare(a, b) {
                    if (a.id < b.id)
                        return -1;
                    if (a.id > b.id)
                        return 1;
                    return 0;
                }

                return this.r_m.data.sort(compare);
            }
        }
    };</script>

<style scoped>
    @import '../../assets/css/chat-with.css';

</style>
