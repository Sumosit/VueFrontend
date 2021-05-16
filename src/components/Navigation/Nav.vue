<template>
    <nav>
        <div class="nav-field">
            <router-link class="right content-center cursor-pointer nav-username" tag="div"
                         to="/user/profile/info"
                         v-if="isUser">
                <span>{{$store.state.auth.user.username}}</span>
            </router-link>
            <div class="right content-center notification" v-on:click="open_not = !open_not">
                <img src="../../assets/images/notification.png">
                <div v-show="notificationLength > 0">{{notificationLength}}</div>
            </div>
        </div>
        <Notification
                :notificationLength="notificationLength"
                v-on:childToParent="onChildClick"
                v-show="open_not"/>
    </nav>
</template>

<script>
    import Notification from "../Notification/Notification"

    export default {
        name: "Nav",
        components: {
            Notification
        },
        data() {
            return {
                dropdown: false,
                open_not: false,
                notificationLength: 0
            }
        },
        computed: {
            loggedIn() {
                return this.$store.state.auth.user;
            },
            isUser() {
                if (this.$store.state.auth.status.loggedIn) {
                    return true;
                }
            },
            isAdmin() {
                if (this.$store.state.auth.status.loggedIn) {
                    return this.$store.state.auth.user.roles.includes('ROLE_ADMIN')
                }
            },
            isModerator() {
                if (this.$store.state.auth.status.loggedIn) {
                    return this.$store.state.auth.user.roles.includes('ROLE_MODERATOR')
                }
            },
            currentUser() {
                return this.$store.state.auth.user;
            }
        },
        methods: {
            logOut() {
                this.$store.dispatch('auth/logout');
                this.$router.push('/login');
            },
            onChildClick(value) {
                this.notificationLength = value
            }
        },
    }
</script>

<style scoped>
    @import '../../assets/css/nav.css';
</style>
