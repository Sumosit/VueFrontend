<template>
    <div>
        <div class="user-info">
            <router-view class="main" v-if="show"/>
            <div v-else>
                Moderator Page Forbidden
            </div>
        </div>
    </div>
</template>

<script>
    import UserService from '../services/user.service';

    export default {
        name: 'Moderator',
        data() {
            return {
                content: '',
                show: false
            };
        },
        mounted() {
            UserService.getModeratorBoard().then(
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
        }
    };
</script>

<style scoped>
    @import '../assets/css/main.css';
</style>
