<template>
  <div>
    <span class="month-title">{{$route.params.month}}, {{getMonthName()}}, {{$route.params.year}}</span>
    <div class="days-wrapper">
      <Days v-for="index in getDaysCount()"
            :key="index"
            :day="{
              id: index,
              month: $route.params.month,
              year: $route.params.year
            }"
            :weekends="weekends"
      />
    </div>
  </div>
</template>

<script>
  import Days from "./Days";
  import ButtonRouterLink from "../Buttons/ButtonRouterLink";
  import getMonth from "../../js/getMonth";

  export default {
    name: "Month",
    props: ['weekends'],
    components: {
      Days
    },
    data() {
      return {}
    },
    methods: {
      getDaysCount() {
        return new Date(this.$route.params.year, this.$route.params.month, 0).getDate();
      },
      getMonthName() {
        return getMonth(this.$route.params.month).name;
      }
    }
  }
</script>

<style scoped>
  @import '../../assets/css/calendar.css';
  @import '../../assets/css/calendar-interface.css';

  .days-wrapper > div {
    padding: 20px;
  }
</style>
