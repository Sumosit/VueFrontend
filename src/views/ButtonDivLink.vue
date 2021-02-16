<template>
  <div
    class="nav-ls-link"
    :class="{'nav-ls-link nav-ls-link > a': !buttonHover,
                  'nav-ls-link-mouseleave': buttonHover}"
    @mouseover="buttonHover = false"
    @mouseleave="buttonHover = true"
  >
    <router-link :to="NavLeftSideButton.link">
      {{NavLeftSideButton.name}}
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "button",
    props: ['NavLeftSideButton'],
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
