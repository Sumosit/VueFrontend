<template>
  <div class="main-info">
    <div class="userNav-grid-container">
      <div class="userNav-grid-item">
        <router-link to="/profile">
          <img src="../assets/images/user.svg">
        </router-link>
      </div>
      <div class="userNav-grid-item">
        <router-link to="/user/storage">
          <img src="../assets/images/box.svg">
        </router-link>
      </div>
      <div class="userNav-grid-item">
        <router-link to="/user/salaries">
          <img src="../assets/images/salaries.svg">
        </router-link>
      </div>
      <div class="userNav-grid-item">
        <a href @click.prevent="logOut">
          <img src="../assets/images/logout.svg">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import UserService from "../services/user.service";

  export default {
    name: "UserTest",
    data() {
      return {
      }
    },
    mounted() {
      if (this.$store.state.auth.status.loggedIn) {
        this.user = true;
        if (this.$store.state.auth.user.roles.includes('ROLE_ADMIN')) {
          this.admin = true;
        } else if (this.$store.state.auth.user.roles.includes('ROLE_MODERATOR')) {
          this.moderator = true;
        }
      }
    },
    methods: {
      logOut() {
        this.$store.dispatch('auth/logout');
        this.$router.push('/login');
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
      }
    },
  }
</script>

<style scoped>
  @import '../assets/css/userNav.css';
</style>