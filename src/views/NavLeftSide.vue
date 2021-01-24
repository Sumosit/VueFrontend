<template>
  <div class="nav-ls">
    <div>
      <div class="nav-ls-link">
        <router-link to="">Private office</router-link>
      </div>
      <div class="nav-ls-link">
        <router-link to="">Human Resources information</router-link>
      </div>
      <div class="nav-ls-link">
        <router-link to="/user/workers">Workers</router-link>
      </div>
      <div class="nav-ls-link">
        <router-link to="/user/chat">Chat</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavLeftSide"
  }
</script>

<style scoped>
  @import '../assets/css/nav-left-side.css';
</style>