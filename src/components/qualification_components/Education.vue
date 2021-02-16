<template>
  <div>
    <button
      class="button button-hover
      absolute absolute-top-left"
      v-on:click="addForm">Add
    </button>
    <div class="p-d-table-field">
      <table>
        <tbody name="list" is="transition-group">
        <tr v-for="(form, index) in forms"
            :key="index">
          <th><input v-model="education"></th>
          <th><input v-model="organization"></th>
          <th><input v-model="year"></th>
          <th><input v-model="specialization"></th>
          <th><input v-model="document"></th>
          <th>
            <button
              class="button button-hover"
              v-on:click="saveEducation">Submit
            </button>
          </th>
        </tr>
        </tbody>
      </table>
      <table>
        <tr>
          <th>Education</th>
          <th>Organization</th>
          <th>Year</th>
          <th>Qualification/Specialization</th>
          <th>Document</th>
        </tr>
        <tbody name="list" is="transition-group">
        <tr
          v-for="(education, index) in $store.getters.getEducation"
          :key="index">
          <th>{{education.education}}</th>
          <th>{{education.organization}}</th>
          <th class="year">{{education.year}}</th>
          <th>{{education.specialization}}</th>
          <th>{{education.document}}</th>
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

  export default {
    name: "Education",
    data() {
      return {
        forms: [],
        education: '',
        organization: '',
        year: '',
        specialization: '',
        document: ''
      }
    },
    async mounted() {
      await this.$store.dispatch('fetchEducation', this.currentUser.id);
      this.currentUser.education = this.$store.getters.getEducation;
      localStorage.setItem('user', JSON.stringify(this.currentUser));
    },
    methods: {
      addForm: function() {
        if (this.forms.length === 0) {
          this.forms.push("#");
        } else {
          this.forms = [];
        }
      },
      saveEducation() {
        let fd = new FormData();
        fd.append("userId", this.$store.state.auth.user.id);
        fd.append("education", this.education);
        fd.append("organization", this.organization);
        fd.append("year", this.year);
        fd.append("specialization", this.specialization);
        fd.append("document", this.document);
        console.log(fd);

        axios.post(backendUrl() + "api/user/education/add", fd, {
          headers: authHeader()
        }).then(res => {
          this.$store.dispatch('fetchEducation', this.currentUser.id);
          this.currentUser.education.splice(0, 0, this.$store.getters.getEducation);
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
</style>
