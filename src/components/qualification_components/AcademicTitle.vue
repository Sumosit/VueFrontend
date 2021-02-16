<template>
  <div>
    <div v-on:click="addForm">add</div>
    <div>
      <table>
        <tr>
          <th>Date</th>
          <th>Organization</th>
          <th>Name</th>
          <th>Volume in hours</th>
          <th></th>
        </tr>
        <tr v-for="(training, index) in $store.getters.getTraining">
          <th>{{training.date}}</th>
          <th>{{training.organization}}</th>
          <th>{{training.name}}</th>
          <th>{{training.volumeInHours}}</th>
        </tr>
        <tr v-for="(form, index) in forms">
          <th class="date"><input v-model="date"></th>
          <th class="organization"><input v-model="organization"></th>
          <th class="organization"><input v-model="name"></th>
          <th class="date"><input v-model="volumeInHours"></th>
          <th><button
            class="button button-hover"
            v-on:click="saveTraining">Submit</button></th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import backendUrl from "../../store/backendUrl";
  import authHeader from "../../services/auth-header";

  export default {
    name: "Academic title",
    data() {
      return {
        forms: [],
        date: '',
        organization: '',
        name: '',
        volumeInHours: ''
      }
    },
    async mounted() {
      await this.$store.dispatch('fetchTraining', this.currentUser.id);
      this.currentUser.training = this.$store.getters.getTraining;
      localStorage.setItem('user', JSON.stringify(this.currentUser));
    },
    methods: {
      addForm() {
        if (this.forms.length === 0){
          this.forms.push("#");
        }
      },
      saveTraining() {
        let fd = new FormData();
        fd.append("userId", this.$store.state.auth.user.id);
        fd.append("date", this.date);
        fd.append("organization", this.organization);
        fd.append("name", this.name);
        fd.append("volumeInHours", this.volumeInHours);
        console.log(fd);

        axios.post(backendUrl() + "api/user/training/add", fd, {
          headers: authHeader()
        }).then(res => {
          this.$store.dispatch('fetchTraining', this.currentUser.id);
          this.currentUser.training = this.$store.getters.getTraining;
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

</style>
