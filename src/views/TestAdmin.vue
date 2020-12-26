<template>
  <div>
    <div class="btn-search-field">
      <input class="btn-search" type="text" v-model="search">
    </div>
    <table>
      <tr>
        <th>Id</th>
        <th>Username</th>
        <th>Email</th>
        <th></th>
      </tr>
      <tr
        v-for="(user, index) in filteredList"
        :key="index">
        <!--        v-if="user.username !== $store.state.auth.user.username">-->
        <td class="table-users-info">{{user.id}}</td>
        <td class="table-users-info">{{user.username}}</td>
        <td class="table-users-info">{{user.email}}</td>
        <td class="table-users-info">
          <input v-model="items[index]" type="number">
        </td>
      </tr>
    </table>
    <div class="btn-send-field">
      <button class="btn-send" v-on:click="sendOneSalary">Send</button>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import axios from 'axios';
  import authHeader from "../services/auth-header";
  import backendUrl from "../store/backendUrl";

  export default {
    name: "AdminTest",
    data() {
      return {
        search: '',
        items: []
      }
    },
    async mounted() {
      await this.$store.dispatch('fetchUsers');
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
    },
    methods: {
      sendOneSalary() {
        let date = new Date();
        let formData = new FormData();
        date = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

        for (let i = 0; i < this.items.length; i++) {
          if (this.items[i] > 0) {
            let salary = {
              id: this.allUsers[i].id,
              amount: this.items[i],
              date: date
            };
            formData.append("salaries", JSON.stringify(salary));
          }
        }
        axios.post(backendUrl() + 'api/admin/add/invoices', formData, {
          headers: authHeader()
        }).then(res => {
          this.$store.dispatch('auth/fetchUserSalaries', this.currentUser.id);
          console.log(res);
        }).catch(err => {
          console.log(err.response);
        });
      }
    },
  }
</script>

<style scoped>
  @import '../assets/css/admin-table.css';
</style>