<template>
    <div class="content-center">
        <div class="form-alarm">
            <input type="text" v-model="alarmMessage">
            <button @click="sendAlarm()">Alarm</button>
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
        name: "AdminAlarm",
        props: ['mainStompClient'],
        data() {
            return {
                alarmMessage: ''
            }
        },
        created() {
            document.title = "Admin plan | Alarm";
        },
        mounted() {
            this.socket = new SockJS(backendUrl() + "gs-guide-websocket");
            this.stompClient = Stomp.over(this.socket);
            this.$store.dispatch("fetchUsers");
        },
        methods: {
            sendAlarm() {
                let message = {
                    message: this.alarmMessage,
                    authorName: this.$store.getters.getUser.username,
                };
                this.stompClient.debug = () => {};
                this.stompClient.send("/app/alarms", JSON.stringify(message), {});
            }
        }
    }
</script>

<style scoped>

</style>
