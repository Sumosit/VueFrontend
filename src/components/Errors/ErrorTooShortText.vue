<template>
    <div class="error content-center">
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
        font-family: Arial, sans-serif;
        font-size: 18px;
        background: red;
        border: 1px solid #f6f6f6;
    }
</style>
