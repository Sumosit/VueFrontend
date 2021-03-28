<template>
  <div>
    <div class="content-center calendar-year">
      <span>{{year}}</span>
    </div>
    <div class="months-wrapper">
      <Months class=""
              v-for="(month, index) in getMonths()"
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
  import getMonths from "../../js/getMonths";

  export default {
    name: "Years",
    components: {
      Months
    },
    data() {
      return {
        year: Number.parseInt(this.$route.params.year),
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
