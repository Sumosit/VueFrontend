<template>
  <div>
    <table>
      <tr>
        <th>Id</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
      <tr
        v-for="(salaries, index) in getUserSalaries()"
        :key="index">
        <td class="table-users-info">{{salaries.id}}</td>
        <td class="table-users-info">{{salaries.amount}} tenge</td>
        <td class="table-users-info">{{salaries.date}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import sortById from "../js/sortById"

  export default {
    name: "UserSalaries",
    mounted() {
      this.$store.dispatch('fetchUserSalaries', this.$store.state.auth.user.id);
    },
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      }
    },
    methods: {
      getUserSalaries() {
        return this.$store.state.auth.user.salaries
      }
    }

  }
</script>

<style scoped>
  @import '../assets/css/admin-table.css';
</style>