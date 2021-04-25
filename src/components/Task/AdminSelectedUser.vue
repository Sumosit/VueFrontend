<template>
  <div
    class="a-u-user"
    v-on:click="hover = !hover"
    :class="{'user-click': hover}">
    {{user.id}}.
    <span v-if="!user.name || !user.surname">{{user.username}}</span>
    <span v-else>{{user.name}} {{user.surname}}</span>
  </div>
</template>

<script>
  export default {
    name: "AdminSelectedUser",
    props: ['user'],
    data() {
      return {
        hover: false
      }
    }
  }
</script>

<style scoped>
  @import '../../assets/css/admin-tasks.css';

  div {
    display: inline-flex;
  }

  .a-u-user {
    cursor: pointer;
    width: 100% ;
    padding: 2.5px 5px;

    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  .a-u-user:hover {
    background: black;
  }
</style>

