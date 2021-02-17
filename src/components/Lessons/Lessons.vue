<template>
  <div class="lesson-main">
    <ul>
      <li>
        <form @submit.prevent>
          <label for="lessonName">
            Lesson name
            <input id="lessonName"
                   v-model="lessonName">
          </label>
          <button
            class="button button-hover"
            v-on:click="saveLesson">Save lesson
          </button>
          <ErrorTooShortText
            :errorText="errorTooShortText"
            v-if="error === 1"/>
          <ErrorTooShortText
            :errorText="errorTooLongText"
            v-if="error === 2"/>
        </form>
      </li>
      <li class="li-block"
          v-for="(lesson, index) in sortedLessons"
          :key="index">
        {{lesson.name}}
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from "axios";
  import backendUrl from "../../store/backendUrl";
  import authHeader from "../../services/auth-header";
  import ErrorTooShortText from "../Errors/ErrorTooShortText";

  export default {
    name: "Lessons",
    data() {
      return {
        lessonName: '',
        error: 0,
        errorTooShortText: 'Too short text',
        errorTooLongText: 'Too long text'
      }
    },
    components: {
      ErrorTooShortText
    },
    async mounted() {
      await this.$store.dispatch('fetchLessons', this.$store.state.auth.user.id);
      this.currentUser.lessonsSet = this.$store.getters.getLessons;
      localStorage.setItem('user', JSON.stringify(this.currentUser));
    },

    methods: {
      saveLesson() {
        if (this.lessonName === "") {
          this.error = 1;
        } else if (this.lessonName.length > 40) {
          this.error = 2;
        }
        else {
          this.error = 0;
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
  @import '../../assets/css/default-ul-li.css';
  @import '../../assets/css/lesson.css';
</style>
