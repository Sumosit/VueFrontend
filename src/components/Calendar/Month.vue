<template>
  <div>
    <span class="month-title">{{month}}, {{getMonthName()}}, {{year}}</span>
    <div class="days-wrapper">
      <Days v-for="index in getDaysCount()"
            :key="index"
            :day="{
              id: index,
              month: month,
              year: year
            }"/>
    </div>
  </div>
</template>

<script>
  import Days from "./Days";
  import ButtonRouterLink from "../Buttons/ButtonRouterLink";
  import getMonth from "../../js/getMonth";

  export default {
    name: "Month",
    components: {
      Days
    },
    data() {
      return {
        month: Number.parseInt(this.$route.params.month),
        year: Number.parseInt(this.$route.params.year)
      }
    },
    methods: {
      getDaysCount() {
        return new Date(this.year, this.month, 0).getDate();
      },
      getMonthName() {
        return getMonth(this.month).name;
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
