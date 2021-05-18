<template>
    <div class="notification-field">
        <div>
            <router-link :to="not.linkToChat" class="not-wrapper"
                         target="_blank" v-for="(not, index) in sortedNotifications"
            :key="index">
                <div class="not-avatar content-center">
                    <img :src="backendUrl + 'files/' + not.fromUser.fileDB.id"
                         v-if="not.fromUser.fileDB">
                    <img src="../../assets/images/user.svg" v-else>
                </div>
                <div class="not-info">
                    <div class="not-type">{{not.type}}</div>
                    <div class="not-message">{{not.message}}</div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import SockJS from "sockjs-client";
    import Stomp from "webstomp-client";
    import backendUrl from "../../store/backendUrl";
    import axios from "axios";
    import authHeader from "../../services/auth-header";
    import juntos from '../../assets/audio/Zvuk_urona_v_Maynkraft_(ringon.site).mp3';

    export default {
        name: "Notification",
        data() {
            return {
                received_messages: [],
                backendUrl: backendUrl()
            }
        },
        async mounted() {
            this.received_messages = this.$store.getters.getNotification;
        },
        computed: {
            sortedNotifications: function () {
                function compare(a, b) {
                    if (a.id > b.id)
                        return -1;
                    if (a.id < b.id)
                        return 1;
                    return 0;
                }

                return this.$store.getters.getNotification.sort(compare);
            }
        }
    }
</script>

<style scoped>
    @import '../../assets/css/notification.css';
</style>
