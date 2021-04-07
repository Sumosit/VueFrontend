<template>
  <router-link tag="div"
               style="font-family: Arial, sans-serif"
               :to="'/user/calendar/'+
        day.year+'/'+day.month+'/'+day.id"
               :class="{
             'day-btn': !buttonHover && !thisDay,
             'day-btn-mouseleave': buttonHover && !thisDay,
             'this-day': !buttonHover && thisDay,
             'this-day-mouseleave': buttonHover && thisDay,
             'weekend': !buttonHover && $store.getters.getWeekends && weekend && !isNote,
             'weekend-mouseleave': buttonHover && $store.getters.getWeekends && weekend && !isNote,
             'isNote': !buttonHover && isNote,
             'isNote-mouseleave': buttonHover && isNote,
             'isNote-weekend': !buttonHover && isNote && $store.getters.getWeekends && weekend,
             'isNote-weekend-mouseleave': buttonHover && $store.getters.getWeekends && isNote && weekend
  }"
               @mouseover="buttonHover = false"
               @mouseleave="buttonHover = true">
    {{day.id}}
    {{checkNotes()}}
  </router-link>
</template>

<script>
  import getWeekends from "../../js/getWeekends";
  import axios from "axios";
  import backendUrl from "../../store/backendUrl";
  import authHeader from "../../services/auth-header";

  export default {
    name: "Days",
    props: ['day'],
    data() {
      return {
        buttonHover: false,
        thisDay: false,
        weekend: false,
        isNote: false,
        notes: null,
      }
    },
    async mounted() {
      this.checkDate();
      this.checkWeekends();
    },
    methods: {
      checkDate() {
        if (this.day.id === new Date().getDate() &&
            this.day.month === new Date().getMonth() + 1 &&
            this.day.year === new Date().getFullYear()) {
          this.thisDay = true;
        }
      },
      checkWeekends() {
        if (getWeekends(this.day.id, this.day.month)) {
          this.weekend = true;
        }
      },
      checkNotes() {
        let en = this.$store.getters.getExistNotes;
        for (var i = 0; i < en.length; i++) {
          if (en[i].day === this.day.id &&
          en[i].month === this.day.month &&
          en[i].year === this.day.year) {
            this.isNote = true;
          }
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

  .weekend {
    cursor: pointer;
    color: white;
    background-color: #00890b;
  }

  .weekend:hover {
    transition: all 0.5s;
    background-color: #ffffff;
    color: black;
  }

  .weekend-mouseleave {
    transition: all 0.5s;
    color: white;
    background-color: black;
  }

  .isNote {
    cursor: pointer;
    color: white;
    background-color: #750055;
  }

  .isNote:hover {
    transition: all 0.5s;
    background-color: #ffffff;
    color: black;
  }

  .isNote-mouseleave {
    transition: all 0.5s;
    color: white;
    background-color: black;
  }

  .isNote-weekend {
    cursor: pointer;
    color: white;
    background: rgb(0,137,11);
    background: linear-gradient(90deg, rgba(0,137,11,1) 50%, rgba(117,0,85,1) 50%);
  }

  .isNote-weekend:hover {
    transition: all 0.5s;
    background-color: #ffffff;
    color: black;
  }

  .isNote-weekend-mouseleave {
    transition: all 0.5s;
    color: white;
    background-color: black;
  }
</style>
