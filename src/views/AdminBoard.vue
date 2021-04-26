<template>
  <div>
    <div>
      <router-view class="main" v-if="show"/>
      <div v-else>
        Admin Page Forbidden
      </div>
    </div>
  </div>
</template>

<script>
  import UserService from '../services/user.service';
  import {mapActions} from "vuex";

  export default {
    name: 'Admin',
    data() {
      return {
        content: '',
        show: false
      };
    },
    mounted() {
      UserService.getAdminBoard().then(
          response => {
            this.show = true;
            this.content = response.data;
          },
          error => {
            this.show = false;
            this.content =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
          }
      );
    },
    methods: {
      ...mapActions([
          'fetchUsers'
      ])
    }
  };
</script>
<style scoped>
  @import '../assets/css/main.css';
</style>
