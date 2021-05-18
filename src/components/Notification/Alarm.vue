<template>
    <div class="alarm content-center">
        {{alarm.message}}
    </div>
</template>

<script>
    export default {
        name: "Alarm",
        props: ['alarm'],
        data() {
            return {
            }
        },
        mounted() {
            setTimeout(()=>{
                this.$store.getters.getAlarms.splice(this.alarm, 1);
            }, 30000)
        }
    }
</script>

<style scoped>
    @import '../../assets/css/alarm.css';
</style>
