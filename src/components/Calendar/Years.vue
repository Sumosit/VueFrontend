<template>
    <div>
        <div class="content-center calendar-year">
            <span>{{$route.params.year}}</span>
        </div>
        <div class="months-wrapper">
            <Months :key="index"
                    :month="{
               id: month.id,
             name: month.name,
             year: $route.params.year}"
                    :weekends="weekends"
                    class=""
                    v-for="(month, index) in getMonths()"/>
        </div>
    </div>
</template>

<script>
    import Months from "./Months";
    import getMonths from "../../js/getMonths";

    export default {
        name: "Years",
        props: ['weekends'],
        components: {
            Months
        },
        data() {
            return {}
        },
        methods: {
            getMonths() {
                return getMonths();
            }
        }
    }
</script>

<style scoped>

</style>
