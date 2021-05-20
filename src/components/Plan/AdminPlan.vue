<template>
    <div>
        <div class="calendar-interface-field">
            <div class="calendar-interface" id="calendar-interface">
                <router-link to="/admin/plan/alarm">
                    <div class="c-i-text content-center">
                        <span>Alarm</span>
                    </div>
                </router-link>
                <router-link to="/admin/plan/groups">
                    <div class="c-i-text content-center">
                        <span>Groups</span>
                    </div>
                </router-link>
                <router-link to="/admin/plan/plans">
                    <div class="c-i-text content-center">
                        <span>Plans</span>
                    </div>
                </router-link>
            </div>
        </div>
        <router-view class="admin-plan"></router-view>
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
            }
        },
        created() {
            document.title = "Admin plan";
        },
        async mounted() {
            this.socket = new SockJS(backendUrl() + "gs-guide-websocket");
            this.stompClient = Stomp.over(this.socket);
            await this.$store.dispatch("fetchUsers");
        }
    }
</script>

<style scoped>
    @import '../../assets/css/admin-plan.css';
    @import '../../assets/css/calendar-interface.css';
</style>
