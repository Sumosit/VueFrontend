<template>
  <div
    class="button-bd button-hover-bd"
    :class="{'button-link-bd': !buttonHover,
             'button-link-mouseleave-bd': buttonHover}"
    @mouseover="buttonHover = false"
    @mouseleave="buttonHover = true">
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
    background-color: #ffffff;
  }

  .button-link-mouseleave-bd {
    transition: all 0.5s;
    color: white;
    background-color: black;
  }
  .button-bd{
    position: relative;
    display: inline-block;
    padding: 15px 10px;
    color: white;
    width: 200px;
    height: 100%;
    font-size: 18px;
    border: 1px solid white;
    background-color: black;
    cursor: pointer;
  }
  .button-hover-bd:hover {
    transition: all 0.5s;
    color: black;
    background-color: #ffffff;
  }
</style>
