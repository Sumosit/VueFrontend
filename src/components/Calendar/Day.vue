<template>
  <div>
    <div class="day content-center">
      <span class="day-title">{{day}}/{{month}}/{{year}}</span>
    </div>
    <Notes/>
  </div>
</template>

<script>
  import Notes from "./Notes"

  export default {
    name: "Day",
    components: {
      Notes
    },
    data() {
      return {
        year: Number.parseInt(this.$route.params.year),
        month: Number.parseInt(this.$route.params.month),
        day: Number.parseInt(this.$route.params.day)
      }
    }
  }
</script>

<style scoped>
  @import '../../assets/css/calendar-day.css';
  @import '../../assets/css/calendar-interface.css';
</style>
