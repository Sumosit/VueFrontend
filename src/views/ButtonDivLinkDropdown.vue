<template>
  <div
    class="nav-ls-link-dp"
    :class="{'nav-ls-link-dp nav-ls-link-dp > a': !buttonHover,
                  'nav-ls-link-mouseleave-dp': buttonHover}"
    @mouseover="buttonHover = false, dropdown = true"
    @mouseleave="buttonHover = true, dropdown = false"
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
  .nav-ls-link-dp {
    position: relative;
    padding: 10px 15px;
  }
  .nav-ls-link-dp:hover, .nav-ls-link-dp:hover > a {
    transition: all 0.5s;
    color: #f6f6f6;
  }
  .nav-ls-link-dp:hover {
    background-color: #000000;
  }
  .nav-ls-link-mouseleave-dp {
    transition: all 0.5s;
    color: white;
    background-color: #3d3d3d;
  }
  .nav-ls-link {
    background: #686868;
    position: relative;
    padding: 10px 15px;
  }
</style>
