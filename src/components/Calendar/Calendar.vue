<template>
  <div class="calendar">
    <CalendarInterface v-if="refresh"/>
    <router-view></router-view>
  </div>
</template>

<script>
  import CalendarInterface from "./CalendarInterface";

  export default {
    name: "Calendar",
    components: {
      CalendarInterface
    },
    data() {
      return {
        year: Number.parseInt(this.$route.params.year),
        refresh: true,
      }
    },
    mounted() {
      this.refresh = false;
      this.$nextTick(()=> {
        this.refresh = true;
      })
    },
    methods: {

    }
  }
</script>

<style scoped>
  @import '../../assets/css/calendar.css';
</style>
