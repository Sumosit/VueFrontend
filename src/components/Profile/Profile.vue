<template>
    <div :key="$route.params.userId">
        <div class="profile-nav">
            <router-link
                    class="content-center"
                    tag="div"
                    :to="'/user/profile/'+$route.params.userId+'/info'">
                <span>Info</span>
            </router-link>
            <router-link
                    v-if="$store.state.auth.user.id === Number.parseInt($route.params.userId)"
                    class="content-center"
                    tag="div"
                    :to="'/user/profile/'+$route.params.userId+'/settings'">
                <span>Settings</span>
            </router-link>
        </div>
        <router-view :userProfile="userProfile"/>
    </div>
</template>

<script>
    import axios from 'axios';
    import authHeader from "../../services/auth-header";
    import backendUrl from "../../store/backendUrl";

    export default {
        name: 'Profile',
        data() {
            return {
                userProfile: Object,
            }
        },
        created() {
            document.title = "Profile";
        },
        async mounted() {
            await this.$store.dispatch("fetchUserExtra", this.$route.params.userId);
            await this.$store.dispatch("fetchUser", this.$route.params.userId)
                .then(() => {
                    this.userProfile = this.$store.getters.getUser;
                });
        },
    };
</script>

<style scoped>
    @import '../../assets/css/main.css';
    @import '../../assets/css/profile-grid.css';
</style>
