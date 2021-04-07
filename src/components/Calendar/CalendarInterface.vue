<template>
  <div class="calendar-interface-field">
    <div class="calendar-interface" id="calendar-interface">
      <a :href="previous()">
        <div class="c-i-img">
          <img
            src="../../assets/images/left-arrow.png" alt="">
        </div>
      </a>
      <a :href="next()">
        <div class="c-i-img">
          <img
            src="../../assets/images/right-arrow.png" alt="">
        </div>
      </a>
      <a :href="currentDate()">
        <div class="c-i-text content-center">
          <span>Today</span>
        </div>
      </a>
      <a :href="currentMonth()">
        <div class="c-i-text content-center">
          <span>Month</span>
        </div>
      </a>
      <a :href="currentYear()">
        <div class="c-i-text content-center">
          <span>Year</span>
        </div>
      </a>
      <a>
        <div class="c-i-checkbox content-center"
        :class="{
          'c-i-checkbox-not-checked > span': !weekends,
          'c-i-checkbox-checked > span': weekends}"
        v-on:click="updateW()">
          <span>Weekends</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: "CalendarInterface",
    data() {
      return {
        link: "/user/calendar/",
        year: Number.parseInt(this.$route.params.year),
        month: Number.parseInt(this.$route.params.month),
        day: Number.parseInt(this.$route.params.day),
        weekends: false,
      }
    },
    methods: {
      ...mapMutations(['updateWeekends']),
      next() {
        if (this.year && this.month && this.day) {
          if (Number.parseInt(this.day + 1) > this.getDaysCount(this.year, this.day)) {
            if (Number.parseInt(this.month + 1) === 13) {
              return this.link + Number.parseInt(this.year + 1) + "/1/1";
            }
            return this.link + this.year + "/" + Number.parseInt(this.month + 1) + "/1";
          } else {
            return this.link + this.year + "/" + this.month + "/" + Number.parseInt(this.day + 1);
          }
        } else if (this.year && this.month && !this.day) {
          if (Number.parseInt(this.month + 1) === 13) {
            return this.link + Number.parseInt(this.year + 1) + "/1";
          } else {
            return this.link + this.year + "/" + Number.parseInt(this.month + 1)
          }
        } else if (this.year && !this.month && !this.day) {
          return this.link + Number.parseInt(this.year + 1);
        }
      },
      previous() {
        if (this.year && this.month && this.day) {
          if (Number.parseInt(this.day - 1) === 0) {
            if (Number.parseInt(this.month - 1) === 0) {
              return this.link+Number.parseInt(this.year-1)+"/12/"+this.getDaysCount(this.year-1, 12);
            }
            else {
              return this.link+this.year+"/"+Number.parseInt(this.month-1)+"/"+this.getDaysCount(this.year, this.month-1);
            }
          }
          else {
            return this.link+this.year+"/"+this.month+"/"+Number.parseInt(this.day-1);
          }
        } else if (this.year && !this.month && !this.day) {
          return this.link+Number.parseInt(this.year - 1);
        }
      },
      currentDate() {
        return "/user/calendar/" +
            new Date().getFullYear() + "/" +
            Number.parseInt(new Date().getMonth() + 1) + "/" +
            new Date().getDate();
      },
      currentMonth() {
        return "/user/calendar/" +
            new Date().getFullYear() + "/" +
            Number.parseInt(new Date().getMonth() + 1);
      },
      currentYear() {
        return "/user/calendar/" +
            new Date().getFullYear();
      },
      getDaysCount(year, month) {
        return new Date(year, month, 0).getDate();
      },
      updateW() {
        this.weekends = !this.weekends;
        this.updateWeekends(this.weekends);
      }
    },
  }
</script>

<style scoped>
  @import '../../assets/css/calendar-interface.css';
</style>
