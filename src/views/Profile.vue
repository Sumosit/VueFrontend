<template>
  <div>
    <div class="profile-nav">
      <router-link
        tag="div"
        to="/user/profile/info"
        class="content-center">
        <span>Info</span>
      </router-link>
      <router-link
        tag="div"
        to="/user/profile/settings"
        class="content-center">
        <span>Settings</span>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import axios from 'axios';
  import authHeader from "../services/auth-header";
  import backendUrl from "../store/backendUrl";

  export default {
    name: 'Profile',
    created() {
      document.title = "Profile";
    },
    async mounted() {
      await this.$store.dispatch("fetchUserExtra", this.$store.state.auth.user.id);
      await this.$store.dispatch("fetchUser", this.$store.state.auth.user.id);
    },
  };
</script>

<style scoped>
  @import '../assets/css/main.css';
  @import '../assets/css/profile-grid.css';
</style>
