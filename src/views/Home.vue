<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
  import UserService from '../services/user.service';

  export default {
    name: 'Home',
    data() {
      return {
        content: ''
      };
    },
    mounted() {
      UserService.getPublicContent().then(
          response => {
            this.content = response.data;
          },
          error => {
            this.content =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
          }
      );
    }
  };
</script>

<style>
  @import '../assets/css/main.css';
</style>