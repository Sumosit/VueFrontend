<template>
    <div class="c-notes-list">
        <div class="content-center">
            <span>Notes</span>
        </div>
        <div class="c-notes-list-wrapper">
            <div :key="index" class="note"
                 v-for="(note, index) in getNotes()">
                <span class="cnl-title content-center">{{note.title}}</span>
                <hr>
                <span class="cnl-description">{{note.description}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NotesList",
        props: ['date'],
        data() {
            return {
                notes: null,
            }
        },
        async mounted() {
            await this.$store.dispatch('fetchNotesByDate', {
                userId: this.$store.state.auth.user.id,
                day: this.date.day,
                month: this.date.month,
                year: this.date.year
            });
        },
        methods: {
            getNotes() {
                this.notes = this.$store.getters.getNotes;
                return this.notes;
            }
        }
    }
</script>

<style scoped>

</style>
