<template>
  <div>
    <div class="btn-search-field">
      <input class="btn-search" type="text" v-model="search">
    </div>
    <div v-for="(user, index) in filteredList"
         :key="index">
      <div class="wrapper">
        <div v-if="user.fileDB"
             class="profile-image">
          <img :src="backendUrl + 'files/' + user.fileDB.id">
        </div>
        <div class="profile-info">
          <span class="username">{{user.username}}</span>
          <span class="email">{{user.email}}</span>
          <button v-on:click="createChat(user.id)">send message</button>
        </div>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import backendUrl from "../store/backendUrl";
  import axios from "axios";
  import authHeader from "../services/auth-header";

  export default {
    name: "Users",
    mounted() {
      this.$store.dispatch('fetchUsers');
      this.backendUrl = backendUrl();
    },
    data() {
      return {
        search: '',
        backendUrl: '',
      }
    },
    methods: {
      createChat(id2) {
        let formData = new FormData();
        formData.append("id1", this.currentUser.id);
        formData.append("id2", id2);

        axios.post(backendUrl() + 'api/chat/add', formData, {
          headers: authHeader()
        }).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err.response);
        });
      }
    },
    computed: {
      ...mapGetters(['allUsers']),
      filteredList: function () {
        return this.allUsers.filter((user) => {
          return user.username.match(this.search);
        })
      },
      currentUser() {
        return this.$store.state.auth.user;
      }
    }
  }
</script>

<style scoped>
  @import '../assets/css/admin-table.css';
  @import '../assets/css/profile-grid.css';
  @import '../assets/css/workers.css';
</style>