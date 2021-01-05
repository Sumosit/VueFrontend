<template>
  <nav>
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <div v-if="!loggedIn">
      <router-link to="/login">Login</router-link>
    </div>
    <div v-if="!loggedIn">
      <router-link to="/register">Register</router-link>
    </div>
    <div v-if="loggedIn">
      <router-link class="link-username" to="/profile">{{currentUser.username}}</router-link>
    </div>
    <div v-if="isAdmin">
      <router-link to="/admin/test">Admin</router-link>
    </div>
    <div v-else-if="isUser">
      <router-link to="/user/test">User</router-link>
    </div>
    <div v-if="loggedIn">
      <router-link to="/user/salaries">Salaries</router-link>
    </div>
    <div v-if="isUser">
      <router-link to="/user/storage">Storage</router-link>
    </div>
    <div v-if="isModerator">
      <router-link to="/moderator/test">Moderator</router-link>
    </div>
    <div>
      <a href @click.prevent="logOut">
        LogOut
      </a>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Nav",
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