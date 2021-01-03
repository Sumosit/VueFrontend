<template>
  <div id="app">
    <div>
      <NavPull v-show="windowWidth <= 958"/>
      <Nav v-show="windowWidth > 958"/>
    </div>
    <div class="main" >
      <router-view :class="{'main-nav': windowWidth > 958,
                  'main-nav-pull': windowWidth <= 958}"/>
    </div>
  </div>
</template>

<script>
  import Nav from './views/Nav';
  import NavPull from './views/NavPull';

  export default {
    data() {
      return {
        windowWidth: window.innerWidth
      }
    },
    mounted() {
      window.onresize = () => {
        this.windowWidth = window.innerWidth
      }
    },
    components: {
      Nav, NavPull
    },
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      },
      showAdminBoard() {
        if (this.currentUser && this.currentUser.roles) {
          return this.currentUser.roles.includes('ROLE_ADMIN');
        }
        return false;
      },
      showModeratorBoard() {
        if (this.currentUser && this.currentUser.roles) {
          return this.currentUser.roles.includes('ROLE_MODERATOR');
        }
        return false;
      }
    },
    methods: {
      logOut() {
        this.$store.dispatch('auth/logout');
        this.$router.push('/login');
      }
    }
  };
</script>

<style scoped>
  @import './assets/css/default.css';
</style>