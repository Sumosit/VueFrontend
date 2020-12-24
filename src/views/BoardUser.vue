<template>
  <div>
    <div class="title">
      <span>User</span>
    </div>
    <div>
      <router-view v-if="show"/>
      <div v-else>
        User Page Forbidden
      </div>
    </div>
  </div>
</template>

<script>
  import UserService from '../services/user.service';

  export default {
    name: 'User',
    data() {
      return {
        content: '',
        show: false
      };
    },
    mounted() {
      UserService.getUserBoard().then(
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