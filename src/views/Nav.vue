<template>
  <nav>
    <div>
      <router-link to="/" class="iitu-logo">
        <img src="../assets/images/IT_Logo.png">
      </router-link>
      <div>
        <div class="nav-username-dropdown"
             @mouseover="username = true"
             @mouseleave="username = false">
          <button class="nav-username-dropdown-btn">
            {{$store.state.auth.user.username}}
          </button>
          <div class="nav-username-dropdown-content"
               v-show="username === true">
            <div class="nav-link">
              <router-link to="/user/profile">
                Profile
              </router-link>
            </div>
            <div class="nav-link">
              <router-link to="/user/profile">
                Human Resources information
              </router-link>
            </div>
          </div>
          </transition>
        </div>
      </div>
      <!--      <div v-if="!loggedIn">-->
      <!--        <router-link to="/login">Login</router-link>-->
      <!--      </div>-->
      <!--      <div v-if="!loggedIn">-->
      <!--        <router-link to="/register">Register</router-link>-->
      <!--      </div>-->
      <!--      <div v-if="loggedIn">-->
      <!--        <router-link class="link-username" to="/user/profile">{{currentUser.username}}</router-link>-->
      <!--      </div>-->
      <!--      <div v-if="loggedIn">-->
      <!--        <router-link to="/user/salaries">Salaries</router-link>-->
      <!--      </div>-->
      <!--      <div v-if="isUser">-->
      <!--        <router-link to="/user/storage">Storage</router-link>-->
      <!--      </div>-->
      <!--      <div>-->
      <!--        <a href @click.prevent="logOut">-->
      <!--          LogOut-->
      <!--        </a>-->
      <!--      </div>-->
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Nav",
    data() {
      return {
        username: false,
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