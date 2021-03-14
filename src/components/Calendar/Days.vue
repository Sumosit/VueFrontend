<template>
  <div
    :class="{'day-btn': !buttonHover,
             'day-btn-mouseleave': buttonHover}"
    @mouseover="buttonHover = false"
    @mouseleave="buttonHover = true">
    {{day.id}}
  </div>
</template>

<script>
  export default {
    name: "Day",
    props: ['day'],
    data() {
      return {
        buttonHover: false
      }
    }
  }
</script>

<style scoped>

</style>
