<template>
  <router-link tag="div"
    :to="'/user/calendar/'+
        day.year+'/'+day.month+'/'+day.id"
    :class="{
    'day-btn': !buttonHover && !thisDay,
             'day-btn-mouseleave': buttonHover && !thisDay,
             'this-day': !buttonHover && thisDay,
             'this-day-mouseleave': buttonHover && thisDay
  }"
    @mouseover="buttonHover = false"
    @mouseleave="buttonHover = true">
    {{day.id}}
  </router-link>
</template>

<script>
  export default {
    name: "Days",
    props: ['day'],
    data() {
      return {
        buttonHover: false,
        thisDay: false
      }
    },
    mounted() {
      this.checkDate();
    },
    methods: {
      checkDate() {
        if (this.day.id === new Date().getDate() &&
            this.day.month === new Date().getMonth() + 1 &&
            this.day.year === new Date().getFullYear()){
          this.thisDay = true;
        }
      }
    }
  }
</script>

<style scoped>
  .this-day {
    cursor: pointer;
    color: white;
    background-color: #830000;
  }

  .this-day:hover {
    transition: all 0.5s;
    background-color: #ffffff;
    color: black;
  }

  .this-day-mouseleave {
    transition: all 0.5s;
    color: white;
    background-color: #830000;
  }

  .day-btn {
    cursor: pointer;
    color: white;
    background-color: black;
  }

  .day-btn:hover {
    transition: all 0.5s;
    background-color: #ffffff;
    color: black;
  }

  .day-btn-mouseleave {
    transition: all 0.5s;
    color: white;
    background-color: black;
  }
</style>
