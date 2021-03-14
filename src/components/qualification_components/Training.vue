<template>
  <div>
    <!--    <div-->
    <!--      class="button button-hover-->
    <!--      absolute absolute-top-left"-->
    <!--      v-on:click="addForm">add</div>-->

    <button
      class="button button-hover
      absolute absolute-top-left"
      v-on:click="addForm">Add
    </button>
    <div class="p-d-table-field">
      <table>
        <tbody name="list" is="transition-group">
        <tr>
          <th>Date</th>
          <th>Organization</th>
          <th>Name</th>
          <th>Volume in hours</th>
          <th></th>
        </tr>
        <tr v-for="(form, index) in forms"
            :key="index">
          <th class="date"><input v-model="date"></th>
          <th class="organization"><input v-model="organization"></th>
          <th class="organization"><input v-model="name"></th>
          <th class="date"><input v-model="volumeInHours"></th>
          <th>
            <button
              class="button button-hover"
              v-on:click="saveTraining">Submit
            </button>
          </th>
        </tr>
        </tbody>
      </table>
      <table>
        <tr>
          <th>Date</th>
          <th>Organization</th>
          <th>Name</th>
          <th>Volume in hours</th>
        </tr>
        <tbody name="list" is="transition-group">
        <tr v-for="(training, index) in $store.getters.getTraining"
        :key="index">
          <th>{{training.date}}</th>
          <th>{{training.organization}}</th>
          <th>{{training.name}}</th>
          <th>{{training.volumeInHours}}</th>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import backendUrl from "../../store/backendUrl";
  import authHeader from "../../services/auth-header";
  import Button from "../Buttons/ButtonDiv";

  export default {
    name: "Training",
    components: {Button},
    data() {
      return {
        addButtonName: 'Add',
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
        if (this.forms.length === 0) {
          this.forms.push("#");
        } else {
          this.forms = [];
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
  @import '../../assets/css/table-forms.css';

  .organization {
    width: 35%;
  }

  .date {
    width: 15%;
  }
</style>
