<template>
  <nav>
    <div class="nav-field">
      <router-link tag="div" to="/user/profile/info"
                   v-if="isUser"
                   class="right content-center cursor-pointer nav-username">
        <span>{{$store.state.auth.user.username}}</span>
      </router-link>
      <div class="right content-center notification">
        <img src="../assets/images/notification.png">
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Nav",
    data() {
      return {
        dropdown: false,
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
    },
  }
</script>

<style scoped>
  @import '../assets/css/nav.css';
</style>
