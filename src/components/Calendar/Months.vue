<template>
  <div>
    <span class="month-title">{{month.id}}, {{month.name}}</span>
    <div class="days-wrapper">
      <Days v-for="index in getDaysCount()"
           :key="index"
           :day="{id: index}"/>
<!--      <Day v-for="index in 35 - getDaysCount()"/>-->
    </div>
  </div>
</template>

<script>
  import Days from "./Days";

  export default {
    name: "Month",
    props: ['month'],
    components: {
      Days
    },
    methods: {
      getDaysCount() {
        return new Date(2021, this.month.id, 0).getDate();
      }
    }
  }
</script>

<style scoped>

</style>
