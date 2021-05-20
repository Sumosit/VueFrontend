<template>
    <div>
        <div v-on:click="show = !show">
            <NavPullBtn
                    :show="show"/>
        </div>
        <transition name="fade">
            <div @mouseleave="show = false"
                 class="nav-pull"
                 v-show="show">
                <div v-on:click="show = !show">
                    <NavPullBtn
                            :lighter="lighter"
                            :show="show"/>
                </div>
                <div class="nav-titles">
                    <div class="nav-bar-username"
                         v-if="loggedIn">
                        <router-link class="link-username" :to="'/user/profile/'+$store.state.auth.user.id+'/info'">{{currentUser.username}}
                        </router-link>
                    </div>
                    <div class="nav-bar">
                        <router-link to="/">Home</router-link>
                    </div>
                    <div class="nav-bar"
                         v-if="!loggedIn">
                        <router-link to="/login">Login</router-link>
                    </div>
                    <div class="nav-bar"
                         v-if="!loggedIn">
                        <router-link to="/register">Register</router-link>
                    </div>
                    <div class="nav-bar" v-if="loggedIn">
                        <router-link to="/user/workers">Workers</router-link>
                    </div>
                    <div class="nav-bar" v-if="loggedIn">
                        <router-link :to="'/user/user-groups/'+$store.state.auth.user.id">Groups</router-link>
                    </div>
                    <div class="nav-bar" v-if="loggedIn">
                        <router-link to="/user/chat">Chat</router-link>
                    </div>
                    <div class="nav-bar" v-if="loggedIn">
                        <router-link :to="'/user/memory/'+$store.getters.getMainMemory.id">Memory</router-link>
                    </div>
                    <div class="nav-bar" v-if="loggedIn">
                        <router-link :to="'/user/calendar/'+new Date().getFullYear()">Calendar</router-link>
                    </div>
                    <div class="nav-bar" v-if="loggedIn">
                        <router-link to="/news">News</router-link>
                    </div>
                    <div class="nav-bar" v-if="isUser">
                        <router-link to="/user/tasks">Tasks</router-link>
                    </div>
                    <div class="nav-bar" v-if="isUser">
                        <router-link to="/user/salary">Salary</router-link>
                    </div>
                    <div class="nav-bar" v-if="isAdmin">
                        <router-link to="/admin/plan">Admin plan</router-link>
                    </div>
                    <div class="nav-bar" v-if="isAdmin">
                        <router-link to="/admin/news">Admin news</router-link>
                    </div>
                    <div class="nav-bar" v-if="isAdmin">
                        <router-link to="/admin/tasks">Admin tasks</router-link>
                    </div>
                    <div class="nav-bar" v-if="isAdmin">
                        <router-link to="/admin/storage">Admin global storage</router-link>
                    </div>
                    <div class="nav-bar" v-if="isAdmin">
                        <router-link to="/admin/salary">Admin salary</router-link>
                    </div>
                    <div class="nav-bar">
                        <a @click.prevent="logOut" href>
                            Exit
                        </a>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import NavPullBtn from "./NavPullBtn";

    export default {
        name: "NavPull",
        components: {NavPullBtn},
        data() {
            return {
                hover: false,
                show: false,
                lighter: true,
                memory: Object
            }
        },
        component: {
            NavPullBtn
        },
        async mounted() {
            await this.$store.dispatch("fetchMainMemory", this.$store.state.auth.user.id);
            // this.memory = this.$store.getters.getMainMemory;
        },
        computed: {
            loggedIn() {
                return this.$store.state.auth.user;
            },
            isUser() {
                if (this.$store.state.auth.status.loggedIn) {
                    return this.$store.state.auth.user.roles.includes('ROLE_USER')
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
            }
        }
    }
</script>

<style scoped>
    @import '../../assets/css/nav-pull.css';
</style>
