<template>
    <div class="admin-plan">
        <div class="content-center">
            <div class="form-alarm">
                <input type="text" v-model="alarmMessage">
                <button @click="sendAlarm()">Alarm</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import authHeader from "../../services/auth-header";
    import backendUrl from "../../store/backendUrl";
    import SockJS from "sockjs-client";
    import Stomp from "webstomp-client";

    export default {
        name: "AdminPlan",
        data() {
            return {
                alarmMessage: ''
            }
        },
        created() {
            document.title = "Admin plan";
        },
        mounted() {
            this.$store.dispatch("fetchUsers");
        },
        methods: {
            sendAlarm() {
                this.socket = new SockJS(backendUrl() + "gs-guide-websocket");
                this.stompClient = Stomp.over(this.socket);
                this.stompClient.debug = () => {};
                setTimeout((() => {
                    let message = {
                        message: this.alarmMessage,
                        authorName: this.$store.getters.getUser.username,
                    };
                    this.stompClient.send("/app/alarms", JSON.stringify(message), {});

                }), 1000);

                // do stuff that requires a connection, like establish subscriptions
            }
        }
    }
</script>

<style scoped>
    @import '../../assets/css/admin-plan.css';
</style>
