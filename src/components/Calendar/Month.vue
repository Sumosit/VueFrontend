<template>
  <div class="calendar">
    <span class="month-title">{{monthId}}, {{monthName}}, {{year}}</span>
    <div class="btn-calendar-slides">
      <ButtonRouterLink
        :ButtonNameAndLink="{name: '<=', link: ''}"/>
      <ButtonRouterLink
        :ButtonNameAndLink="{name: '=>', link: slideRight()}"/>
    </div>
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
  import ButtonRouterLink from "../Buttons/ButtonRouterLink";
  import getMonth from "../../js/getMonth";

  export default {
    name: "Month",
    components: {
      Days,
      ButtonRouterLink
    },
    data() {
      return {
        monthId: Number.parseInt(this.$route.params.monthId),
        year: new Date().getFullYear(),
        monthName: 'None'
      }
    },
    mounted() {
      this.monthName = getMonth(this.monthId).name;
      if (this.$route.params.year) {
        this.year = Number.parseInt(this.$route.params.year)
      }
    },
    methods: {
      slideRight() {
        var monthId, year, link = "http://localhost:8081/user/calendar/";
        if (this.monthId === 12) {
          monthId = 1;
          year = this.year + 1;
          link = link + monthId + "/" + year
        } else {
          monthId = this.monthId + Number.parseInt(1);
          link = link + monthId;
        }
        return link;
      },
      slideLeft() {

        var monthId, year, link = "http://localhost:8081/user/calendar/";
        if (this.monthId === 1) {
          monthId = 12;
          year = this.year - 1;
          link = link + monthId + "/" + year
        } else {
          monthId = this.monthId - Number.parseInt(1);
          link = link + monthId;
        }
        return link;
      },
      getDaysCount() {
        return new Date(this.year, this.monthId, 0).getDate();
      }
    }
  }
</script>

<style scoped>
  @import '../../assets/css/calendar.css';

  .days-wrapper > div {
    padding: 20px;
  }
</style>
