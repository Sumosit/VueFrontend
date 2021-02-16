<template>
  <div class="backgroundColor-padding5">
    <div class="i-form">
      <form @submit.prevent>
        <label>SNILS
          <input
            class="content-center"
            v-model="snils"></label>
        <label>IIN
          <input
            class="content-center iin-input"
            type="number"
            v-model="iin"></label>
        <label>Phone number
          <input
            class="content-center"
            v-model="phoneNumber"></label>
        <label>Location
          <input v-model="location"
            class="content-center"></label>
        <button
          class="button button-left-bottom"
          :class="{'button-hover': !buttonHover,
                  'button-leave': buttonHover}"
          @mouseover="buttonHover = false"
          @mouseleave="buttonHover = true"
          v-on:click="savePersonalData">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import authHeader from "../services/auth-header";
  import backendUrl from "../store/backendUrl";

  export default {
    name: "PersonalData",
    data() {
      return {
        snils: '',
        iin: '',
        phoneNumber: '',
        location: '',
        buttonHover: false,
      }
    },
    async mounted() {
      await this.$store.dispatch('fetchPersonalData', this.currentUser.id);
      this.currentUser.personalData = this.$store.getters.getPersonalData;
      localStorage.setItem('user', JSON.stringify(this.currentUser));
    },
    methods: {
      savePersonalData() {
        let fd = new FormData();
        fd.append("userId", this.$store.state.auth.user.id);
        fd.append("snils", this.snils);
        fd.append("iin", this.iin);
        fd.append("phoneNumber", this.phoneNumber);
        fd.append("location", this.location);
        console.log(fd);

        axios.post(backendUrl() + "api/user/personal-data/add", fd, {
          headers: authHeader()
        }).then(res => {
          this.currentUser.personalData = this.$store.dispatch('fetchPersonalData', this.currentUser.id);
          localStorage.setItem('user', JSON.stringify(this.currentUser));
          console.log(res);
        }).catch(err => {
          console.log(err.response);
        });
      }
    },
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      },
    }
  }
</script>

<style scoped>
  @import '../assets/css/profile-grid.css';
  @import '../assets/css/personal-data.css';
</style>
