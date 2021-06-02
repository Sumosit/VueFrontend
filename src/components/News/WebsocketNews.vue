<template>
    <div class="news-all">
        <transition-group name="card">
            <div :key="item.id"
                 class="news"
                 v-for="(item, index) in $store.getters.allNews"
                 v-show="loading && $store.getters.allNews">
                <div class="news-title-field">
                    <div class="news-title-author-avatar">
                        <img :src="backendUrl + 'files/' + item.author.fileDB.id"
                             v-if="item.author.fileDB">
                        <img src="../../assets/images/user.svg" v-else>
                    </div>
                    <div class="news-title">
                        {{item.title}}
                        <p>by {{item.author.username}}, {{item.date}}</p>
                    </div>
                </div>
                <div class="news-content-field">
                    <p style="white-space: pre-line" v-html="item.content"></p>
                </div>
            </div>
        </transition-group>
        <div class="news content-center" v-if="!$store.getters.allNews">
            No News
        </div>
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
    import LoadingLdsRipple from "../Loading/LoadingLdsRipple"

    export default {
        name: "websocketdemo",
        components: {
            LoadingLdsRipple
        },
        data() {
            return {
                received_messages: [],
                send_title: null,
                send_content: null,
                connected: false,
                backendUrl: backendUrl(),
                loading: false
            };
        },
        created() {
            document.title = "News";
        },
        async mounted() {
            await this.$store.dispatch("fetchNews").then(
                setTimeout(() => {
                    this.connect();
                    this.loading = true;
                }, 1000));
        },
        methods: {
            connect() {
                this.socket = new SockJS(backendUrl() + "gs-guide-websocket");
                this.stompClient = Stomp.over(this.socket);
                this.stompClient.debug = () => {
                };

                this.stompClient.connect(
                    {},
                    frame => {
                        this.connected = true;
                        // console.log(frame);
                        this.stompClient.subscribe("/topic/news", async tick => {
                            // console.log(tick);
                            // this.received_messages.unshift(JSON.parse(tick.body));
                            this.$store.commit('unshiftNews', JSON.parse(tick.body));
                            // await this.$store.dispatch("fetchNews");
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
    };
</script>

<style scoped>
    @import '../../assets/css/news.css';
</style>
