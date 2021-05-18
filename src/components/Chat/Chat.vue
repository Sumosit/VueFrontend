<template>
    <div>
        <div class="c-btn-search-field">
            <input class="c-btn-search"
                   placeholder="search"
                   type="text"
                   v-model="search">
            <img src="../../assets/images/change-chatWith.png"
                 v-on:click="changeView = !changeView">
        </div>
        <div class="c-wrapper">
            <div class="c-id2-list">
                <div :class="{'current-chat': Number.parseInt($route.params.recipientId) === chat.recipient.id}"
                     :key="index"
                     v-for="(chat, index) in getChatIdFilter()"
                     v-on:click="setUrlParameters(chat.id, chat.recipient.id)">
                    <div class="c-profile-image">
                        <div class="c-pi-avatar">
                            <img :src="backendUrl + 'files/' + chat.recipient.fileDB.id"
                                 v-if="chat.recipient.fileDB && (chat.recipient.id !== $store.state.auth.user.id)">
                            <img src="../../assets/images/user.svg" v-else>
                        </div>
                        <div class="pi-info">
                            <div class="c-profile-info"
                                 v-if="chat.recipient.id !== $store.state.auth.user.id">
                                <span class="username">{{chat.recipient.username}}</span>
                                <span class="email">{{chat.recipient.email}}</span>
                            </div>
                            <div class="c-profile-info"
                                 v-if="chat.sender.id !== $store.state.auth.user.id">
                                <span class="username">{{chat.sender.username}}</span>
                                <span class="email">{{chat.sender.email}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-center"
                 v-show="!loading">
                <LoadingLdsRipple/>
            </div>
            <div class="c-message-field">
                <ChatWith :change-view="changeView"
                          :key="$route.params.chatId"/>
            </div>
        </div>
    </div>
</template>

<script>
    import backendUrl from "../../store/backendUrl";
    import LoadingLdsRipple from "../Loading/LoadingLdsRipple";
    import ChatWith from "./ChatWith";
    import {router} from "../../router";
    import axios from "axios";

    export default {
        name: "Chat",
        components: {
            ChatWith, LoadingLdsRipple
        },
        data() {
            return {
                search: '',
                backendUrl: '',
                changeView: false,
                loading: false
            }
        },
        created() {
            document.title = "Chat";
        },
        async mounted() {
            await this.$store.dispatch('fetchChat');
            this.loading = true;
            this.backendUrl = backendUrl();
        },
        methods: {
            setUrlParameters(chat_id, recipientId) {
                router.push("/user/chat/" + chat_id + '/' + recipientId);
            },
            getChatIdFilter() {
                let chatId = this.sortedChatId;
                return chatId.filter(c => (c.sender.username + c.sender.name + c.sender.surname + c.recipient.username + c.recipient.name + c.recipient.surname).toLowerCase().indexOf(this.search) > -1);
            },
        },
        computed: {
            getChat() {
                return this.$store.getters.allChat;
            },
            sortedChatId: function () {
                function compare(a, b) {
                    if (a.lastId > b.lastId)
                        return -1;
                    if (a.lastId < b.lastId)
                        return 1;
                    return 0;
                }

                return this.$store.getters.allChat.sort(compare);
            },
        }
    }
</script>

<style scoped>
    @import '../../assets/css/chat.css';
</style>
