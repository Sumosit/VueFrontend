<template>
  <div class="calendar">
    <div class="months-wrapper">
      <Months class=""
             v-for="(month, index) in months"
             :key="index"
             :month="{id: month.id, name: month.name}"/>
    </div>
  </div>
</template>

<script>
  import Months from "./Months";

  export default {
    name: "Calendar",
    data() {
      return {
        months: [{id: 1, name: 'January'},
          {id: 2, name: 'February'},
          {id: 3, name: 'March'},
          {id: 4, name: 'April'},
          {id: 5, name: 'May'},
          {id: 6, name: 'June'},
          {id: 7, name: 'July'},
          {id: 8, name: 'August'},
          {id: 9, name: 'September'},
          {id: 10, name: 'October'},
          {id: 11, name: 'November'},
          {id: 12, name: 'December'}]
      }
    },
    components: {
      Months
    }
  }
</script>

<style scoped>
  @import '../../assets/css/calendar.css';
</style>
