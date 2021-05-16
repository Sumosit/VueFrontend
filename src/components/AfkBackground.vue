<template>
    <div class="afk">
        <div class="afk-title">
            {{ timestamp }}
        </div>
    </div>
</template>

<script>
    import moment from 'moment'

    export default {
        data: () => ({
            timestamp: "",
        }),
        created() {
            setInterval(this.getNow, 1000);
        },
        methods: {
            getNow: function () {
                const today = new Date();
                const date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
                const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                const dateTime = date + ' ' + time;
                this.timestamp = dateTime;
            }
        }
    }
</script>

<style scoped>
    .afk {
        position: absolute;
        height: 100%;
        width: 100%;
        margin: -8px;
        word-wrap: break-word;
        background: #090909;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .afk-title {
        position: absolute;
        font-size: 70px;
        color: white;
    }
</style>
