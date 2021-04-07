<template>
  <div style="position: relative">
    <div class="day content-center">
      <span class="day-title">{{day}}/{{month}}/{{year}}</span>
    </div>
    <div class="add-notes-on-off content-center"
         v-on:click="showAddNotesField=!showAddNotesField">
      +
    </div>
    <Notes v-if="showAddNotesField"
           :date="{
      day: day,
      month: month,
      year: year,
    }"/>
    <NotesList v-if="year && month && day && showNotesList"
               :date="{
      day: day,
      month: month,
      year: year,
    }"
    :showNotesList="!showNotesList"/>
  </div>
</template>

<script>
  import Notes from "./Notes"
  import NotesList from "./NotesList"

  export default {
    name: "Day",
    components: {
      Notes, NotesList
    },
    data() {
      return {
        year: Number.parseInt(this.$route.params.year),
        month: Number.parseInt(this.$route.params.month),
        day: Number.parseInt(this.$route.params.day),
        showAddNotesField: false,
        showNotesList: true
      }
    }
  }
</script>

<style scoped>
  @import '../../assets/css/calendar-day.css';
  @import '../../assets/css/calendar-interface.css';
  @import '../../assets/css/calendar-notes.css';
  @import '../../assets/css/calendar-notes-list.css';
</style>
