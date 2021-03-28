<template>
  <div class="calendar">
    <div class="calendar-interface-field">
      <div class="calendar-interface" id="calendar-interface">
        <a :href="previousYear()">
          <div class="c-i-img">
            <img
              src="../../assets/images/left-arrow.png" alt="">
          </div>
        </a>
        <a :href="'/user/calendar/'+nextYear()">
          <div class="c-i-img">
            <img
              src="../../assets/images/right-arrow.png" alt="">
          </div>
        </a>
        <a :href="currentDate()">
          <div class="c-i-text content-center">
            <span>Today</span>
          </div>
        </a>
        <a :href="currentMonth()">
          <div class="c-i-text content-center">
            <span>Month</span>
          </div>
        </a>
      </div>
    </div>
    <div class="content-center calendar-year">
      <span>{{year}}</span>
    </div>
    <div class="months-wrapper">
      <Months class=""
              v-for="(month, index) in months"
              :key="index"
              :month="{
               id: month.id,
             name: month.name,
             year: year}"/>
    </div>
  </div>
</template>

<script>
  import Months from "./Months";

  export default {
    name: "Calendar",
    data() {
      return {
        year: Number.parseInt(this.$route.params.year),
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
    },
    methods: {
      nextYear() {
        return Number.parseInt(this.year) + 1;
      },
      currentDate() {
        return "/user/calendar/" +
            new Date().getFullYear() + "/" +
            Number.parseInt(new Date().getMonth() + 1) + "/" +
            new Date().getDate();
      },
      currentMonth() {
        return "/user/calendar/" +
            new Date().getFullYear() + "/" +
            Number.parseInt(new Date().getMonth() + 1);
      },
      previousYear() {
        return Number.parseInt(this.year) - 1;
      }
    }
  }
</script>

<style scoped>
  @import '../../assets/css/calendar.css';
  @import '../../assets/css/calendar-interface.css';
</style>
