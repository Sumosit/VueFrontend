<template>
  <div class="backgroundColor-padding5">
    {{$store.getters.getLessons}}
    <ul>
      <li>
        <form @submit.prevent>
          <label for="lessonName">
            Lesson Name
            <input id="lessonName"
                   v-model="lessonName">
          </label>
          <button
            class="button button-hover"
            v-on:click="saveLesson">Save lesson
          </button>
        </form>
      </li>
      <li v-for="(lesson, index) in sortedLessons"
          :key="index">
        {{lesson}}
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from "axios";
  import backendUrl from "../../store/backendUrl";
  import authHeader from "../../services/auth-header";

  export default {
    name: "Lessons",
    data() {
      return {
        lessonName: ''
      }
    },
    async mounted() {
      await this.$store.dispatch('fetchLessons', this.$store.state.auth.user.id);
      this.currentUser.lessonsSet = this.$store.getters.getLessons;
      localStorage.setItem('user', JSON.stringify(this.currentUser));
    },

    methods: {
      saveLesson() {
        let fd = new FormData();
        fd.append("userId", this.$store.state.auth.user.id);
        fd.append("lessonName", this.lessonName);
        console.log(fd);

        axios.post(backendUrl() + "api/user/lessons/save", fd, {
          headers: authHeader()
        }).then(res => {
          // console.log(res.data);
          // this.currentUser.lessonsSet.push(res.data);
          this.currentUser.lessonsSet = this.$store.dispatch('fetchLessons', this.currentUser.id);
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
      sortedLessons: function () {
        function compare(a, b) {
          if (a.id > b.id)
            return -1;
          if (a.id < b.id)
            return 1;
          return 0;
        }

        return this.$store.getters.getLessons.sort(compare);
      }
    }
  }
</script>

<style scoped>

</style>
