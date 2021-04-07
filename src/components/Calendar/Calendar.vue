<template>
  <div class="calendar">
    <CalendarInterface v-if="refresh"
    />
    <router-view style="padding: 8px"></router-view>
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
        refresh: true
      }
    },
    async mounted() {
      this.refresh = false;
      this.$nextTick(()=> {
        this.refresh = true;
      });
       await this.$store.dispatch('fetchExistNotesByDate', this.$store.state.auth.user.id);
    },
    methods: {
    }
  }
</script>

<style scoped>
  @import '../../assets/css/calendar.css';
</style>
