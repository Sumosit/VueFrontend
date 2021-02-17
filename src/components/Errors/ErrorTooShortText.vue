<template>
  <div class="error">
    {{errorText}}
  </div>
</template>

<script>
  export default {
    name: "TooShortText",
    props: ['errorText']
  }
</script>

<style scoped>
  .error {
    margin-top: 8px;
    padding: 10px;
    background: #230000;
    border: 1px solid #ef00c8;
    font-family: Arial, sans-serif;
    font-size: 18px;
  }
</style>
