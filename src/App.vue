<template>
  <div id="app">
    <!--    <nav>-->
    <!--      <a href @click.prevent>bezKoder</a>-->
    <!--      <div>-->
    <!--        <li>-->
    <!--          <router-link to="/home">-->
    <!--            <font-awesome-icon icon="home" />Home-->
    <!--          </router-link>-->
    <!--        </li>-->
    <!--        <li v-if="showAdminBoard">-->
    <!--          <router-link to="/admin" class="nav-link">Admin Board</router-link>-->
    <!--        </li>-->
    <!--        <li v-if="showModeratorBoard">-->
    <!--          <router-link to="/mod">Moderator Board</router-link>-->
    <!--        </li>-->
    <!--        <li class="nav-item">-->
    <!--          <router-link v-if="currentUser" to="/user">User</router-link>-->
    <!--        </li>-->
    <!--      </div>-->

    <!--      <div v-if="!currentUser">-->
    <!--        <li>-->
    <!--          <router-link to="/register">-->
    <!--            <font-awesome-icon icon="user-plus" />Sign Up-->
    <!--          </router-link>-->
    <!--        </li>-->
    <!--        <li class="nav-item">-->
    <!--          <router-link to="/login">-->
    <!--            <font-awesome-icon icon="sign-in-alt" />Login-->
    <!--          </router-link>-->
    <!--        </li>-->
    <!--      </div>-->

    <!--      <div v-if="currentUser">-->
    <!--        <li class="nav-item">-->
    <!--          <router-link to="/profile">-->
    <!--            <font-awesome-icon icon="user" />-->
    <!--            {{ currentUser.username }}-->
    <!--          </router-link>-->
    <!--        </li>-->
    <!--        <li>-->
    <!--          <a href @click.prevent="logOut">-->
    <!--            <font-awesome-icon icon="sign-out-alt" />LogOut-->
    <!--          </a>-->
    <!--        </li>-->
    <!--      </div>-->
    <!--    </nav>-->
    <div>
      <NavPull/>
    </div>
    <div class="main" >
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Nav from './views/Nav';
  import NavPull from './views/NavPull';

  export default {
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