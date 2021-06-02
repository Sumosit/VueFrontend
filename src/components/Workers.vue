<template>
    <div>
        <div class="workers-btn-search-field">
            <input placeholder="Search a workers" type="text" v-model="search">
        </div>
        <div :key="index"
             v-for="(user, index) in filteredList"
             v-show="user.id !== $store.state.auth.user.id && loading">
            <div class="workers-wrapper">
                <router-link :to="'/user/profile/'+user.id+'/info'"
                             class="workers-profile-image cursor-pointer"
                             tag="div"
                             v-if="user.fileDB">
                    <img :src="backendUrl + 'files/' + user.fileDB.id">
                </router-link>
                <router-link :to="'/user/profile/'+user.id+'/info'"
                             class="workers-profile-image cursor-pointer"
                             tag="div"
                             v-else>
                    <img src="../assets/images/user.svg">
                </router-link>
                <div class="workers-profile-info">
                    <span class="username">{{user.username}}</span>
                    <span class="email">{{user.email}}</span>
                    <button class="btn-create-chat" v-on:click="createChat(user.id)">send message</button>
                </div>
            </div>
        </div>
        <div class="content-center"
             v-show="!loading">
            <LoadingLdsRipple/>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import backendUrl from "../store/backendUrl";
    import axios from "axios";
    import authHeader from "../services/auth-header";
    import LoadingLdsRipple from "./Loading/LoadingLdsRipple";

    export default {
        name: "Users",
        data() {
            return {
                search: '',
                backendUrl: '',
                loading: false
            }
        },
        created() {
            document.title = "Workers";
        },
        async mounted() {
            await this.$store.dispatch('fetchUsers')
                .then(setTimeout(() => {
                    this.loading = true;
                }, 1000));
            this.backendUrl = backendUrl();
        },
        components: {
            LoadingLdsRipple
        },
        methods: {
            createChat(id2) {
                let formData = new FormData();
                formData.append("id1", this.currentUser.id);
                formData.append("id2", id2);

                axios.post(backendUrl() + 'api/chat/add', formData, {
                    headers: authHeader()
                }).then(res => {
                    // console.log(res);
                }).catch(err => {
                    console.log(err.response);
                });
            }
        },
        computed: {
            ...mapGetters(['allUsers']),
            filteredList: function () {
                return this.allUsers.filter((user) => {
                    return user.username.match(this.search);
                })
            },
            currentUser() {
                return this.$store.state.auth.user;
            }
        }
    }
</script>

<style scoped>
    @import '../assets/css/admin-table.css';
    @import '../assets/css/profile-grid.css';
    @import '../assets/css/workers.css';
</style>
