<template>
    <div
            class="calendar">
        <CalendarInterface
                :key="$route.params.day+$route.params.month+$route.params.year"
                :refresh="refresh"
                :weekends="weekends"
                v-if="refresh"
                v-on:childToParent="onChildClick"/>
        <router-view
                :key="$route.params.day+$route.params.month+$route.params.year"
                :weekends="weekends"
                style="padding-bottom: 8px; padding-left: 8px; padding-right: 8px"
                v-show="loading"></router-view>
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
        async updated() {
            await this.$store.dispatch('fetchExistNotesByDate', this.$store.state.auth.user.id);
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
