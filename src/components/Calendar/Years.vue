<template>
  <div>
    <div class="content-center calendar-year">
      <span>{{$route.params.year}}</span>
    </div>
    <div class="months-wrapper">
      <Months class=""
              :weekends="weekends"
              v-for="(month, index) in getMonths()"
              :key="index"
              :month="{
               id: month.id,
             name: month.name,
             year: $route.params.year}"/>
    </div>
  </div>
</template>

<script>
  import Months from "./Months";
  import getMonths from "../../js/getMonths";

  export default {
    name: "Years",
    props:['weekends'],
    components: {
      Months
    },
    data() {
      return {
      }
    },
    methods: {
      getMonths() {
        return getMonths();
      }
    }
  }
</script>

<style scoped>

</style>
