<template>
  <div>
    <a :href="ButtonNameAndLink.link"
       class="nav-ls-link-btl"
       :class="{
    'isButton': isButton,
    'nav-ls-link-btl nav-ls-link-btl > a': !buttonHover && !lighter,
    'nav-ls-link-btl-lighter nav-ls-link-btl-lighter > a': !buttonHover && lighter,
    'nav-ls-link-btl-mouseleave': buttonHover && !lighter,
    'nav-ls-link-btl-mouseleave-lighter': buttonHover && lighter
   }"
       @mouseover="buttonHover = false"
       @mouseleave="buttonHover = true"
       :to="ButtonNameAndLink.link"
    >
      {{ButtonNameAndLink.name}}
    </a>
  </div>
</template>

<script>
  export default {
    name: "ButtonDivLink",
    props: ['ButtonNameAndLink', 'lighter', 'isButton'],
    data() {
      return {
        buttonHover: false
      }
    }
  }
</script>

<style scoped>
  .isButton {
    cursor: pointer;
  }

  .lighter {
    background: black;
    /*background: #230000;*/
    border: 0.1px solid #f6f6f6;
  }

  .nav-ls-link-btl {
    position: relative;
    display: block;
    padding: 10px 15px;
  }

  .nav-ls-link-btl:hover, .nav-ls-link-btl:hover > a {
    transition: all 0.5s;
    color: black;
  }

  .nav-ls-link-btl:hover {
    background-color: #f6f6f6;
  }

  .nav-ls-link-btl-lighter:hover, .nav-ls-link-btl-lighter:hover > a {
    transition: all 0.5s;
    color: #f6f6f6;
  }

  .nav-ls-link-btl-lighter {
    background-color: #f6f6f6;
    color: black;
    position: relative;
    padding: 10px 15px;
  }

  .nav-ls-link-btl-lighter:hover {
    background-color: black;
  }

  .nav-ls-link-btl-mouseleave-lighter {
    transition: all 0.7s;
    color: black;
    background-color: #f6f6f6;
  }

  .nav-ls-link-btl-mouseleave {
    transition: all 0.7s;
    color: #f6f6f6;
    background-color: black;
  }
</style>
