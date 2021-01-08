<template>
  <div id="app">
    <AfkBackground v-show="!afkBackground"/>
    <div v-show="afkBackground">
      <NavPull v-show="windowWidth <= 958"/>
      <Nav v-show="windowWidth > 958"/>
    </div>
    <div v-show="afkBackground" class="main" >
      <router-view :class="{'main-nav': windowWidth > 958,
                  'main-nav-pull': windowWidth <= 958}"/>
    </div>
  </div>
</template>

<script>
  import Nav from './views/Nav';
  import NavPull from './views/NavPull';
  import AfkBackground from './components/AfkBackground';

  export default {
    data() {
      return {
        windowWidth: window.innerWidth,
        afkBackground: false
      }
    },
    mounted() {
      window.onresize = () => {
        this.windowWidth = window.innerWidth
      }
    },
    components: {
      Nav, NavPull,
      AfkBackground
    },
    onIdle() {
      this.afkBackground = false
    },
    onActive() {
      this.afkBackground = true
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