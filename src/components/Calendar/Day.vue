<template>
    <div style="position: relative">
        <div class="day content-center">
            <span class="day-title">{{$route.params.day}}/{{$route.params.month}}/{{$route.params.year}}</span>
        </div>
        <div class="add-notes-on-off content-center"
             v-on:click="showAddNotesField=!showAddNotesField">
            +
        </div>
        <Notes :date="{
      day: $route.params.day,
      month: $route.params.month,
      year: $route.params.year,
    }"
               v-if="showAddNotesField"/>
        <NotesList :date="{
      day: $route.params.day,
      month: $route.params.month,
      year: $route.params.year,
    }"
                   :showNotesList="!showNotesList"
                   v-if="$route.params.year && $route.params.month && $route.params.day && showNotesList"/>
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
