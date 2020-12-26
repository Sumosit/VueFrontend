<template>
  <div>
    <img src="../assets/images/nav-pull.jpg"
         class="btn-nav-pull"
         :class="{'nav-bar-over': !hover, 'nav-bar-leave': hover}"
         @mouseover="hover = false"
         @mouseleave="hover = true"
         v-on:click="show = !show">
    <transition name="fade">
      <div v-show="show"
           @mouseleave="show = false"
           class="nav-pull">
        <img src="../assets/images/nav-pull.jpg"
             class="btn-nav-pull"
             :class="{'nav-bar-over': !hover, 'nav-bar-leave': hover}"
             @mouseover="hover = false"
             @mouseleave="hover = true"
             v-on:click="show = !show">
        <div class="nav-titles">
          <div class="nav-bar">
            <router-link to="/">Home</router-link>
          </div>
          <div v-if="!loggedIn"
               class="nav-bar">
            <router-link to="/login">Login</router-link>
          </div>
          <div v-if="!loggedIn"
               class="nav-bar">
            <router-link to="/register">Register</router-link>
          </div>
          <div v-if="loggedIn" class="nav-bar">
            <router-link to="/profile">Profile</router-link>
          </div>
          <div v-if="isUser" class="nav-bar">
            <router-link to="/user/test">User</router-link>
          </div>
          <div v-if="loggedIn" class="nav-bar">
            <router-link to="/user/salaries">Salaries</router-link>
          </div>
          <div v-if="isUser" class="nav-bar">
            <router-link to="/user/storage">Storage</router-link>
          </div>
          <div v-if="isAdmin" class="nav-bar">
            <router-link to="/admin/test">Admin</router-link>
          </div>
          <div v-if="isModerator" class="nav-bar">
            <router-link to="/moderator/test">Moderator</router-link>
          </div>
          <!--          <div v-if="user" class="nav-bar">-->
          <!--            <a href="http://localhost:8080/">Order Home</a>-->
          <!--          </div>-->
          <!--          <div v-if="user" class="nav-bar">-->
          <!--            <a href="http://localhost:8080/orders">Orders</a>-->
          <!--          </div>-->
          <div class="nav-bar">
            <a href @click.prevent="logOut">
              Exit
            </a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "NavPull",
    data() {
      return {
        hover: false,
        show: false,
        user: false,
        admin: false,
        moderator: false
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
    methods: {
      logOut() {
        this.$store.dispatch('auth/logout');
        this.$router.push('/login');
      }
    }
  }
</script>

<style scoped>
  @import '../assets/css/nav-pull.css';
</style>