<template>
  <div
    class="calendar">
    <CalendarInterface
      v-on:childToParent="onChildClick"
      :refresh="refresh"
      :weekends="weekends"
      v-if="refresh"/>
    <router-view
      v-show="loading"
      :key="$route.params.day"
      :weekends="weekends"
      style="padding: 8px"></router-view>
    <div class="content-center"
         v-show="!loading">
      <LoadingLdsRipple/>
    </div>
  </div>
</template>

<script>
  import CalendarInterface from "./CalendarInterface"
  import LoadingLdsRipple from "../Loading/LoadingLdsRipple"
  import {mapMutations} from 'vuex'

  export default {
    name: "Calendar",
    components: {
      CalendarInterface,
      LoadingLdsRipple
    },
    created() {
      document.title = "Calendar";
    },
    data() {
      return {
        link: "/user/calendar/",
        weekends: false,
        refresh: true,
        loading: false
      }
    },
    async mounted() {
      this.refresh = false;
      this.$nextTick(() => {
        this.refresh = true;
      });
      await this.$store.dispatch('fetchExistNotesByDate', this.$store.state.auth.user.id);
      this.loading = true;
    },
    methods: {
      ...mapMutations(['updateWeekends']),
      onChildClick(value) {
        this.weekends = value
      }
    }
  }
</script>

<style scoped>
  @import '../../assets/css/calendar.css';
</style>
