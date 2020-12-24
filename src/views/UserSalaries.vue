<template>
  <div>
    <table>
      <tr>
        <th>Id</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
      <tr
        v-for="(salaries, index) in even()"
        :key="index">
        <td class="table-users-info">{{salaries.id}}</td>
        <td class="table-users-info">{{salaries.amount}} tenge</td>
        <td class="table-users-info">{{salaries.date}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "UserSalaries",
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      }
    },
    methods: {
      even: function () {
        // Set slice() to avoid to generate an infinite loop!
        return this.currentUser.salaries.slice().sort(function (a, b) {
          return b.id - a.id;
        });
      }
    }

  }
</script>

<style scoped>
  @import '../assets/css/admin-table.css';
</style>