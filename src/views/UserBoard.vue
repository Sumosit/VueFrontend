<template>
  <div>
    <div class="main"
    :class="{
      'wrapper-nav-ls': windowWidth > 958
    }">
      <NavLeftSide v-show="windowWidth > 958"/>
      <router-view v-if="show"/>
      <div v-else>
        User Page Forbidden
      </div>
    </div>
  </div>
</template>

<script>
  import UserService from '../services/user.service';
  import NavLeftSide from "./NavLeftSide";

  export default {
    name: 'User',
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
