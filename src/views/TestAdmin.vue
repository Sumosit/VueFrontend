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
        <router-link to="/admin/salaries/give">
          <img src="../assets/images/giveSalaries.svg">
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
    methods: {
      logOut() {
        this.$store.dispatch('auth/logout');
        this.$router.push('/login');
      }
    }
  }
</script>

<style scoped>
  @import '../assets/css/userNav.css';
</style>