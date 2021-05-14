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
             'weekend': !buttonHover && weekends && weekend && !isNote,
             'weekend-mouseleave': buttonHover && weekends && weekend && !isNote,
             'this-day-isNote': !buttonHover && isNote && thisDay,
             'this-day-isNote-mouseleave': buttonHover && isNote && thisDay,
             'isNote': !buttonHover && isNote,
             'isNote-mouseleave': buttonHover && isNote,
             'isNote-weekend': !buttonHover && isNote && weekends && weekend,
             'isNote-weekend-mouseleave': buttonHover && weekends && isNote && weekend
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
    props: ['day', 'weekends'],
    data() {
      return {
        buttonHover: false,
        thisDay: false,
        weekend: false,
        isNote: false,
        notes: [],
      }
    },
    mounted() {
      this.checkDate();
      this.checkWeekends();
    },
    methods: {
      checkDate() {
        if (Number.parseInt(this.day.id) === new Date().getDate() &&
            Number.parseInt(this.day.month) === new Date().getMonth() + 1 &&
            Number.parseInt(this.day.year) === new Date().getFullYear()) {
          this.thisDay = true;
        }
      },
      checkWeekends() {
        if (getWeekends(Number.parseInt(this.day.id), Number.parseInt(this.day.month))) {
          this.weekend = true;
        }
      },
      checkNotes() {
        let en = this.$store.getters.getExistNotes;
        for (let i = 0; i < en.length; i++) {
          if (en[i].day === Number.parseInt(this.day.id) &&
              en[i].month === Number.parseInt(this.day.month) &&
              en[i].year === Number.parseInt(this.day.year)) {
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
    background-color: black;
    color: #f6f6f6;
  }

  .this-day-mouseleave {
    transition: all 0.5s;
    color: white;
    background-color: #830000;
  }

  .day-btn {
    cursor: pointer;
    color: black;
    background-color: #f6f6f6;
  }

  .day-btn:hover {
    transition: all 0.5s;
    background-color: #444444;
    color: #f6f6f6;
  }

  .day-btn-mouseleave {
    transition: all 0.5s;
    color: black;
    background-color: #f6f6f6;
  }

  .weekend {
    cursor: pointer;
    color: black;
    background-color: #00f988;
  }

  .weekend:hover {
    transition: all 0.5s;
    background-color: black;
    color: #f6f6f6;
  }

  .weekend-mouseleave {
    transition: all 0.5s;
    color: black;
    background-color: #f6f6f6;
  }

  .isNote {
    cursor: pointer;
    color: white;
    background-color: rgba(208, 0, 149, 1);
  }

  .isNote:hover {
    transition: all 0.5s;
    background-color: black;
    color: #f6f6f6;
  }

  .isNote-mouseleave {
    transition: all 0.5s;
    color: black;
    background-color: #f6f6f6;
  }

  .isNote-weekend {
    transition: 1s all;
    cursor: pointer;
    background: #00f988;
    background: linear-gradient(90deg, #00f988 50%, rgba(208, 0, 149, 1) 50%);
    color: black;
  }

  .isNote-weekend:hover {
    transition: all 0.5s;
    background: linear-gradient(90deg, black 50%, black 50%);
    color: #f6f6f6;
  }

  .isNote-weekend-mouseleave {
    transition: all 0.5s;
    color: black;
    background-color: #f6f6f6;
  }

  .this-day-isNote {
    cursor: pointer;
    color: white;
    background: rgb(252,0,0);
    background: linear-gradient(90deg, rgba(252,0,0,1) 50%, rgba(208, 0, 149, 1) 50%);  }

  .this-day-isNote:hover {
    transition: all 0.5s;
    background-color: black;
    color: #f6f6f6;
  }

  .this-day-isNote-mouseleave {
    transition: all 0.5s;
    color: black;
    background: linear-gradient(90deg, black 50%, black 50%);
  }
</style>
