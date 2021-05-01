<template>
  <div>
    <div v-on:click="show = !show">
      <NavPullBtn :show="show"/>
    </div>
    <transition name="fade">
      <div v-show="show"
           @mouseleave="show = false"
           class="nav-pull">
        <div v-on:click="show = !show">
          <NavPullBtn
            :show="show"
            :lighter="lighter"/>
        </div>
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
          <div v-if="loggedIn"
               class="nav-bar-username">
            <router-link class="link-username" to="/user/profile/info">{{currentUser.username}}</router-link>
          </div>
          <div v-if="loggedIn" class="nav-bar">
            <router-link to="/user/workers">Workers</router-link>
          </div>
          <div v-if="loggedIn" class="nav-bar">
            <router-link to="/user/chat">Chat</router-link>
          </div>
          <div v-if="loggedIn" class="nav-bar">
            <a :href="'/user/memory/'+$store.getters.getMainMemory.id">Memory</a>
          </div>
          <div v-if="loggedIn" class="nav-bar">
            <router-link :to="'/user/calendar/'+new Date().getFullYear()">Calendar</router-link>
          </div>
          <div v-if="loggedIn" class="nav-bar">
            <router-link to="/news">News</router-link>
          </div>
          <div v-if="isUser" class="nav-bar">
            <router-link to="/user/tasks">Tasks</router-link>
          </div>
          <div v-if="isUser" class="nav-bar">
            <router-link to="/user/salary">Salary</router-link>
          </div>
          <div v-if="isAdmin" class="nav-bar">
            <router-link to="/admin/news">Admin News</router-link>
          </div>
          <div v-if="isAdmin" class="nav-bar">
            <router-link to="/admin/tasks">Admin Tasks</router-link>
          </div>
          <div v-if="isUser" class="nav-bar">
            <router-link to="/user/storage">Storage</router-link>
          </div>
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
  import NavPullBtn from "../views/NavPullBtn";

  export default {
    name: "NavPull",
    components: {NavPullBtn},
    data() {
      return {
        hover: false,
        show: false,
        lighter: true,
        memory: Object
      }
    },
    component: {
      NavPullBtn
    },
    async mounted() {
      await this.$store.dispatch("fetchMainMemory", this.$store.state.auth.user.id);
      // this.memory = this.$store.getters.getMainMemory;
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.user;
      },
      isUser() {
        if (this.$store.state.auth.status.loggedIn) {
          return this.$store.state.auth.user.roles.includes('ROLE_USER')
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
    }
  }
</script>

<style scoped>
  @import '../assets/css/nav-pull.css';
</style>
