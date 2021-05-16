<template>
    <div>
        <div :class="{
      'wrapper-nav-ls': windowWidth > 1400
    }"
             class="main">
            <NavLeftSide v-show="windowWidth > 1401"/>
            <router-view v-if="show"/>
            <div v-else>
                Admin Page Forbidden
            </div>
        </div>
    </div>
</template>

<script>
    import UserService from '../services/user.service';
    import NavLeftSide from "../components/Navigation/NavLeftSide";
    import {mapActions} from "vuex";

    export default {
        name: 'Admin',
        data() {
            return {
                content: '',
                show: false,
                windowWidth: window.innerWidth
            };
        },
        components: {
            NavLeftSide
        },
        mounted() {
            window.onresize = () => {
                this.windowWidth = window.innerWidth
            };
            UserService.getAdminBoard().then(
                response => {
                    this.show = true;
                    this.content = response.data;
                },
                error => {
                    this.show = false;
                    this.content =
                        (error.response && error.response.data && error.response.data.message) ||
                        error.message ||
                        error.toString();
                }
            );
        },
        methods: {
            ...mapActions([
                'fetchUsers'
            ])
        }
    };
</script>
<style scoped>
    @import '../assets/css/main.css';
</style>
