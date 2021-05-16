<template>
    <div
            :class="{'button-link-bd': !buttonHover,
             'button-link-mouseleave-bd': buttonHover}"
            @mouseleave="buttonHover = true"
            @mouseover="buttonHover = false"
            class="button-bd button-hover-bd">
    <span class="content-center">
      {{ButtonName.name}}
    </span>
    </div>
</template>

<script>
    export default {
        name: "ButtonDiv",
        props: ['ButtonName'],
        data() {
            return {
                buttonHover: false
            }
        }
    }
</script>

<style scoped>
    .button-link-bd:hover {
        background-color: black;
    }

    .button-link-mouseleave-bd {
        transition: all 0.5s;
        color: black;
        background-color: #f6f6f6;
    }

    .button-bd {
        position: relative;
        display: inline-block;
        padding: 15px 10px;
        color: black;
        width: 200px;
        height: 100%;
        font-size: 18px;
        border: 1px solid black;
        background-color: #f6f6f6;
        cursor: pointer;
    }

    .button-hover-bd:hover {
        transition: all 0.5s;
        color: #f6f6f6;
        background-color: black;
    }
</style>
