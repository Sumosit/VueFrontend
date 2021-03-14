<template>
  <a class="btn-delete-wall">
    <img class="btn-delete"
         src="../../assets/images/icons8-delete.svg">
  </a>
</template>

<script>
  import axios from "axios";
  import backendUrl from "../../store/backendUrl";
  import authHeader from "../../services/auth-header";

  export default {
    name: "ButtonDelete"
  }
</script>

<style scoped>
  .btn-delete {
    display: inline-block;
    width: 30px;
    height: auto;
    cursor: pointer;
  }
  .btn-delete-wall {
    height: 100%;
    background: black;
  }
</style>
