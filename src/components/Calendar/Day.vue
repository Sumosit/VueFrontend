<template>
  <div>
    <div class="calendar-interface content-left" id="calendar-interface">
      <a>
        <div class="c-i-img">
          <img
            src="../../assets/images/left-arrow.png" alt="">
        </div>
      </a>
    </div>
    <div class="day content-center">
      <span class="day-title">{{day}}/{{month}}/{{year}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Day",
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
