<template>
  <div>
    <div>asd</div>
    <div v-show="!open"
         v-on:click="open = !open">
      <div class="admin-users-open content-center">
        <img src="../../assets/images/iconmonstr-plus-2.svg"/>
      </div>
    </div>
    <div v-show="open">
      <div>
        <div class="admin-users">
          <div class="a-u-interface">
            <div
              v-on:click="open = !open"
              class="content-center a-u-i-btn">
              <img src="../../assets/images/iconmonstr-minus-2.svg"/>
            </div>
          </div>
          <div class="a-u-search-field content-center">
            <input type="text" v-model="search" placeholder="search user">
          </div>
          <div class="a-u-user-list-field">
            <div class="a-u-user-list">
              <div v-for="(user, index) in getUsersFilter()">
                <AdminSelectedUser :user="user"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AdminSelectedUser from "../Task/AdminSelectedUser";

  export default {
    name: "AdminTasks",
    created() {
      document.title = "Admin Tasks";
    },
    components: {
      AdminSelectedUser
    },
    data() {
      return {
        selected: [],
        search: '',
        open: true
      }
    },
    mounted() {
      this.$store.dispatch("fetchUsers");
    },
    methods: {
      getUsersFilter() {
        let users = this.$store.getters.getUsers;
        return users.filter(c => this.getUsernameNameSurname(c.username, c.name, c.surname).toLowerCase().indexOf(this.search) > -1);
      },
      getUsernameNameSurname(username, name, surname) {
        return username + name + surname;
      }
    }
  }
</script>

<style scoped>
  @import '../../assets/css/admin-tasks.css';
</style>
