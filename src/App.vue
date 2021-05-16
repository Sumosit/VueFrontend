<template>
    <div id="app">
        <AfkBackground v-show="!afkBackground"/>
        <div v-show="afkBackground">
            <NavPull/>
            <Nav/>
        </div>
        <div v-show="afkBackground">
            <router-view :class="{'main-nav': windowWidth > 958,
      'main-nav-pull': windowWidth <= 958}"/>
        </div>
    </div>
</template>

<script>
    import Nav from './components/Navigation/Nav';
    import NavPull from './components/Navigation/NavPull';
    import AfkBackground from './components/AfkBackground';
    import SockJS from "sockjs-client";
    import Stomp from "webstomp-client";
    import backendUrl from "./store/backendUrl";
    import axios from "axios";

    export default {
        data() {
            return {
                windowWidth: 0,
                afkBackground: true,
                received_notification: [],
            }
        },
        created() {
            window.addEventListener('resize', this.updateWidth);
        },
        mounted() {
            this.connect;
        },
        components: {
            Nav, NavPull,
            AfkBackground
        },
        onIdle() {
            this.afkBackground = false
        },
        onActive() {
            this.afkBackground = true
        },
        computed: {
            currentUser() {
                return this.$store.state.auth.user;
            },
            showAdminBoard() {
                if (this.currentUser && this.currentUser.roles) {
                    return this.currentUser.roles.includes('ROLE_ADMIN');
                }
                return false;
            },
            showModeratorBoard() {
                if (this.currentUser && this.currentUser.roles) {
                    return this.currentUser.roles.includes('ROLE_MODERATOR');
                }
                return false;
            }
        },
        methods: {
            updateWidth() {
                this.windowWidth = window.innerWidth;
            },
            logOut() {
                this.$store.dispatch('auth/logout');
                this.$router.push('/login');
            },
            send() {
                // console.log("Send message:" + this.send_message);
                if (this.stompClient && this.stompClient.connected) {
                    const msg = {
                        message: this.send_message,
                        chatId: this.$route.params.chatId,
                        userId: this.$store.state.auth.user.id,
                        sendDate: new Date().getTime()
                    };
                    // console.log(JSON.stringify(msg));
                    this.stompClient.send("/app/notification/" + this.$store.state.auth.user.id, JSON.stringify(msg), {});
                }
            },
            connect() {
                this.socket = new SockJS(backendUrl() + "gs-guide-websocket");
                this.stompClient = Stomp.over(this.socket);
                this.stompClient.connect(
                    {},
                    frame => {
                        this.connected = true;
                        // console.log(frame);
                        this.stompClient.subscribe("/topic/notification" + this.$store.state.auth.user.id, async tick => {
                            // console.log(tick);
                            let message = JSON.parse(tick.body);
                            this.received_messages.push(message);
                        });
                    },
                    error => {
                        console.log(error);
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
        }
    };
</script>

<style scoped>
    @import './assets/css/default.css';
    @import './assets/css/default-upload.css';
</style>
