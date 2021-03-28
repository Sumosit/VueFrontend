<template>
  <div>
    <router-link tag="span"
                 :to="'/user/calendar/'+
                 month.year+'/'+month.id"
                 class="month-title">{{month.id}}, {{month.name}}
    </router-link>
    <div class="days-wrapper">
      <Days v-for="index in getDaysCount()"
            :key="index"
            :day="{
             id: index,
             month: month.id,
             year: month.year
             }"/>
    </div>
  </div>
</template>

<script>
  import Days from "./Days";

  export default {
    name: "Months",
    props: ['month'],
    components: {
      Days
    },
    methods: {
      getDaysCount() {
        return new Date(this.month.year, this.month.id, 0).getDate();
      }
    }
  }
</script>

<style scoped>

</style>
