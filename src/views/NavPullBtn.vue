<template>
  <div class="nav-pull-btn"
  @mouseover="hover = true"
  @mouseleave="hover = false">
    <div class="strip"
         style="margin-bottom: 4px"
         :class="{
      'strip-anim': hover,
      'strip-lighter': lighter}"></div>
    <div class="strip"
         style="margin-bottom: 4px"
         :class="{
      'strip-anim1': hover,
      'strip-lighter': lighter}"></div>
    <div class="strip"
         :class="{
      'strip-anim': hover,
      'strip-lighter': lighter}"></div>
    {{lighter}}
  </div>
</template>

<script>
  export default {
    name: "nav-pull-btn",
    props: ['show', 'lighter'],
    data() {
      return {
        hover: false
      }
    }
  }
</script>

<style scoped>
  @keyframes anim {
    0% {
    }
    30% {
      transform: translateX(3px);
    }
    60% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(2px);
    }
  }
  @keyframes anim1 {
    0% {
    }
    30% {
      transform: translateX(-4px);
    }
    60% {
      transform: translateX(6px);
    }
    100% {
      transform: translateX(-2px);
    }
  }

  .strip-anim {
    animation: anim linear 0.3s;
  }
  .strip-anim1 {
    animation: anim1 linear 0.3s;
  }
  .strip-anim2 {
    animation: anim linear 0.3s;
  }

  .strip {
    display: block;
    width: 36px;
    height: 7px;
    border-radius: 5px;
    background: black;
  }
  .strip-lighter {
    display: block;
    margin-top: 4px;
    width: 36px;
    height: 7px;
    border-radius: 5px;
    background: #f6f6f6;
  }
  .strip-else {
    height: 7px;
  }
  .nav-pull-btn {
    cursor: pointer;
    position: fixed;
    z-index: 9999;
    width: 36px;
    height: 30px;
    top: 10px;
    left: 5px;
    color: black;
  }
</style>
