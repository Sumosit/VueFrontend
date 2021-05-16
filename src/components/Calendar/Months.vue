<template>
    <div>
        <router-link :to="'/user/calendar/'+
                 month.year+'/'+month.id"
                     class="month-title"
                     tag="span">{{month.id}}, {{month.name}}
        </router-link>
        <div class="days-wrapper">
            <Days :day="{
             id: index,
             month: month.id,
             year: month.year
             }"
                  :key="index"
                  :weekends="weekends"
                  v-for="index in getDaysCount()"/>
        </div>
    </div>
</template>

<script>
    import Days from "./Days";

    export default {
        name: "Months",
        props: ['month', 'weekends'],
        components: {
            Days
        },
        methods: {
            getDaysCount() {
                return new Date(this.month.year, this.month.id, 0).getDate();
            }
        }
    }
</script>

<style scoped>

</style>
