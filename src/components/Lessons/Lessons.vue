<template>
  <div class="lesson-main">
    <form @submit.prevent class="lessons-form">
      <input id="lessonName"
             placeholder="Lesson name"
             v-model="lessonName">
      <ButtonDiv
        v-on:click="saveLesson"
        :ButtonName="{name: 'Save lesson'}"/>
      <ErrorTooShortText
        :errorText="errorTooShortText"
        v-if="error === 1"/>
      <ErrorTooShortText
        :errorText="errorTooLongText"
        v-if="error === 2"/>
    </form>
    <ul>
      <li class="li-block"
          v-for="(lesson, index) in sortedLessons"
          :key="index">
        <div class="lessons-wrapper">
          <div>
            <ButtonRouterLink
              :ButtonNameAndLink="{
          name: lesson.name,
          link: '/user/lessons/'+lesson.id
        }"/>
          </div>
          <div v-on:click="deleteLesson(lesson.id)">
            <ButtonDelete/>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from "axios";
  import backendUrl from "../../store/backendUrl";
  import authHeader from "../../services/auth-header";
  import ErrorTooShortText from "../Errors/ErrorTooShortText";
  import ButtonRouterLink from "../Buttons/ButtonRouterLink";
  import ButtonDiv from "../Buttons/ButtonDiv";
  import ButtonDelete from "../Buttons/ButtonDelete";

  export default {
    name: "Lessons",
    data() {
      return {
        lessonName: '',
        error: 0,
        errorTooShortText: 'Too short text',
        errorTooLongText: 'Too long text',
        buttonSaveLesson: "Save lesson",
        deleteLinkForButton: "http://localhost:8081/api/user/lessons/delete/"
      }
    },
    components: {
      ErrorTooShortText,
      ButtonRouterLink,
      ButtonDiv,
      ButtonDelete
    },
    async mounted() {
      await this.$store.dispatch('fetchLessons', this.$store.state.auth.user.id);
      this.currentUser.lessonsSet = this.$store.getters.getLessons;
      localStorage.setItem('user', JSON.stringify(this.currentUser));
    },

    methods: {
      deleteLesson(lessonId) {
        axios.get(backendUrl() + "api/user/lessons/delete/"+this.$store.state.auth.user.id+"/"+lessonId, {
          headers: authHeader()
        }).then(res => {
          this.currentUser.lessonsSet = this.$store.dispatch('fetchLessons', this.currentUser.id);
          localStorage.setItem('user', JSON.stringify(this.currentUser));
          console.log(res);
        }).catch(err => {
          console.log(err.response);
        });
      },
      saveLesson() {
        if (this.lessonName <= 1) {
          this.error = 1;
        } else if (this.lessonName.length > 40) {
          this.error = 2;
        } else {
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
