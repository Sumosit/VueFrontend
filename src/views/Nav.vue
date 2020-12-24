<template>
  <nav>
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <div>
      <router-link to="/login">Login</router-link>
    </div>
    <div>
      <router-link to="/register">Register</router-link>
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
      methods: {
        logOut() {
          this.$store.dispatch('auth/logout');
          this.$router.push('/login');
        }
      }
  }
</script>

<style scoped>
  @import '../assets/css/nav.css';
</style>