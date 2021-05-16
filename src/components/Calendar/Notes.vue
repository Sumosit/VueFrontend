<template>
    <div class="notes">
        <div class="add-notes-field">
            <div class="add-notes">
                <label for="title">Title</label>
                <input id="title" maxlength="25" name="title" v-model="title">
                <label for="description">Description</label>
                <input id="description" maxlength="80" name="description" v-model="description">
                <button v-on:click="saveNote()">Save</button>
            </div>
        </div>
    </div>
</template>

<script>
    import getTimestampDate from "../../js/getTimestampDate";
    import axios from "axios";
    import backendUrl from "../../store/backendUrl";
    import authHeader from "../../services/auth-header";

    export default {
        name: "Notes",
        props: ['date'],
        data() {
            return {
                showAddNotesField: false,
                title: "",
                description: "",
            }
        },
        methods: {
            saveNote() {
                let fd = new FormData();
                fd.append("userId", this.$store.state.auth.user.id);
                fd.append("day", this.date.day);
                fd.append("month", this.date.month);
                fd.append("year", this.date.year);
                fd.append("date", getTimestampDate());
                fd.append("title", this.title);
                fd.append("description", this.description);

                axios.post(backendUrl() + "api/user/notes", fd, {
                    headers: authHeader()
                }).then(async res => {
                    console.log(res);
                    await this.$store.dispatch('fetchNotesByDate', {
                        userId: this.$store.state.auth.user.id,
                        day: this.date.day,
                        month: this.date.month,
                        year: this.date.year
                    });
                }).catch(err => {
                    console.log(err.response);
                });
            }
        }
    }
</script>

<style scoped>
</style>
