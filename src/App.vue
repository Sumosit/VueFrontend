<template>
    <div id="app">
        <div class="alarm-field content-center">
            <ul class="alarm-ul">
                <li>
                    <Alarm :alarm="alarm"
                           :key="index"
                           v-for="(alarm, index) in $store.getters.getAlarms"
                    />
                </li>
            </ul>
        </div>
        <AfkBackground v-show="!afkBackground"/>
        <div v-show="afkBackground">
            <NavPull/>
            <Nav/>
        </div>
        <div v-show="afkBackground">
            <router-view
                    :class="{
                'main-nav': windowWidth > 958,
                'main-nav-pull': windowWidth <= 958
            }"/>
        </div>
    </div>
</template>

<script>
    import Nav from './components/Navigation/Nav';
    import NavPull from './components/Navigation/NavPull';
    import AfkBackground from './components/AfkBackground';
    import Alarm from './components/Notification/Alarm';
    import SockJS from "sockjs-client";
    import Stomp from "webstomp-client";
    import backendUrl from "./store/backendUrl";
    import axios from "axios";
    import juntos from './assets/audio/Zvuk_urona_v_Maynkraft_(ringon.site).mp3';
    import alarm from './assets/audio/mixkit-interface-hint-notification-911.wav';

    export default {
        components: {
            Nav, NavPull,
            AfkBackground,
            Alarm
        },
        data() {
            return {
                windowWidth: 0,
                afkBackground: true,
            }
        },
        created() {
            window.addEventListener('resize', this.updateWidth);
            setInterval(this.getNow, 1000);
            // setInterval(this.updateTasks(), 10000);
        },
        async mounted() {
            if (this.$store.state.auth.user.id) {
                this.connect();
                this.connectToAlarms();
                await this.$store.dispatch('fetchNotification', this.$store.state.auth.user.id);
                await this.$store.dispatch("fetchUser", this.$store.state.auth.user.id);
            }
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
            connectToAlarms() {
                this.socket = new SockJS(backendUrl() + "gs-guide-websocket");
                this.stompClient = Stomp.over(this.socket);
                this.stompClient.debug = () => {
                };

                this.stompClient.connect(
                    {},
                    frame => {
                        this.connected = true;
                        // console.log(frame);
                        this.stompClient.subscribe("/topic/alarms",
                            async tick => {
                                let message = JSON.parse(tick.body);
                                console.log(message);
                                this.$store.commit('pushAlarms', message);
                                var audio = new Audio(alarm);
                                audio.volume = 0.2;
                                audio.muted;
                                audio.play();
                            });
                    },
                    error => {
                        // console.log(error);
                        this.connected = false;
                    }
                );

            },
            connect() {
                this.socket = new SockJS(backendUrl() + "gs-guide-websocket");
                this.stompClient = Stomp.over(this.socket);
                // this.stompClient.debug = () => {
                // };
                this.stompClient.connect(
                    {},
                    frame => {
                        this.connected = true;
                        // console.log(frame);
                        this.stompClient.subscribe("/topic/notification/" + this.$store.state.auth.user.id,
                            async tick => {
                                // console.log(tick);
                                let message = JSON.parse(tick.body);
                                this.$store.commit('pushNotification', message);
                                var audio = new Audio(juntos);
                                if (message.type.includes("New task")) {
                                    await this.$store.dispatch("fetchTasksBiUserId", this.$store.state.auth.user.id);
                                }
                                if (message.type.includes("New salary")) {
                                    await this.$store.dispatch("fetchSalaries", this.$store.state.auth.user.id);
                                }
                                audio.volume = 0.2;
                                audio.muted;
                                audio.play();
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
        }
    }
    ;
</script>

<style scoped>
    @import './assets/css/default.css';
    @import './assets/css/default-upload.css';
    @import './assets/css/default-fonts.css';
    @import './assets/css/default-margin.css';
    @import './assets/css/default-table.css';
    @import './assets/css/default-width.css';
    @import './assets/css/default-position.css';
    @import './assets/css/default-buttons.css';
    @import './assets/css/default-ul-li.css';
    @import './assets/css/default-progress-bar.css';
    @import './assets/css/default-animations.css';
    @import './assets/css/default-pop-up-window.css';
</style>
