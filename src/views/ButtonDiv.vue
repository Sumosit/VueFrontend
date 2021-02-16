<template>
  <div
    class="button button-hover
      absolute absolute-top-left"
    :class="{'button-link': !buttonHover,
                  'nav-ls-link-mouseleave': buttonHover}"
    @mouseover="buttonHover = false"
    @mouseleave="buttonHover = true">
    {{addButtonName}}
  </div>
</template>

<script>
  export default {
    name: "button",
    props: ['addButtonName'],
    data() {
      return {
        buttonHover: false
      }
    }
  }
</script>

<style scoped>
  .button-link:hover {
    background-color: #ffffff;
  }

  .button-link-mouseleave {
    transition: all 0.5s;
    color: white;
    background-color: black;
  }
</style>
