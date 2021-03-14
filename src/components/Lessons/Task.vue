<template>
  <div class="lesson-main">
    <form @submit.prevent>
      <label for="name">
        <input id="name"
               placeholder="Task name"
               v-model="name">
      </label>
      <label style="margin-left: 10px"
             for="description">
        <input id="description"
               placeholder="Task description"
               v-model="description">
      </label>
      <label for="files" class="input-file">
        <img class="" src="../../assets/images/cloud-upload-signal-svgrepo-com.svg">
        <input id="files"
               ref="files"
               type="file"
               class="no-display"
               multiple
               @change="handleFileUploads">
      </label>
      <div
        v-on:click="saveTask">
        <ButtonDivLink
          :ButtonNameAndLink="{
              name: 'Save task',
              link: false
              }"
          :lighter="true"
          :isButton="true"/>
      </div>
    </form>
    <ul>
      <li class="li-block">
        <ButtonDivLink
          :ButtonNameAndLink="{
              name: 'Name: '+getCurrentTask().name,
              link: ''
              }"
          :lighter="true"
          :isButton="true"/>
      </li>
      <li class="li-block">
        <ButtonDivLink
          :ButtonNameAndLink="{
              name: 'Decsription: '+getCurrentTask().description,
              link: ''
              }"
          :lighter="true"
          :isButton="true"/>
      </li>

      <li class="li-block"
          v-for="(fileDB, index) in getCurrentTask().fileDBSet"
          :key="index">
        <ButtonDivLink
          :ButtonNameAndLink="{
              name: 'Download - ' + fileDB.name,
              link: 'http://localhost:8080/user/storage/'+fileDB.id
              }"
          :lighter="true"
          :isButton="true"/>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from "axios";
  import backendUrl from "../../store/backendUrl";
  import authHeader from "../../services/auth-header";
  import ButtonDivLink from "../Buttons/ButtonRouterLink";

  export default {
    name: "Task",
    data() {
      return {
        description: '',
        name: '',
        backendUrl: backendUrl(),
        task: Object,
        lessonId: Number.parseInt(this.$route.params.lessonId),
        taskId: Number.parseInt(this.$route.params.taskId)
      }
    },
    components: {
      ButtonDivLink
    },
    async mounted() {
      let payload = {
        userId: this.$store.state.auth.user.id,
        lessonId: this.lessonId,
        taskId: this.taskId
      };
      await this.$store.dispatch('fetchLessonTask', payload);
    },
    methods: {
      getCurrentTask() {
        return this.$store.getters.getCurrentTask
      },
      handleFileUploads() {
        this.files = this.$refs.files.files;
      },
      saveTask() {
        let formData = new FormData();
        for (var i = 0; i < this.files.length; i++) {
          let file = this.files[i];
          formData.append('files', file);
        }
        formData.append('userId', this.$store.state.auth.user.id);
        formData.append('name', this.name);
        formData.append('description', this.description);
        formData.append('lessonId', this.$route.params.lessonId);

        axios.post(backendUrl() + "api/user/lessons/tasks/save", formData, {
          headers: authHeader()
        }).then(res => {
          this.currentUser.lessonsSet = this.$store.dispatch('fetchLessons', this.currentUser.id);
          console.log(this.currentUser.lessonsSet.lessonsTasksSet);
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
      }
    }
  }
</script>

<style scoped>
  @import '../../assets/css/default-ul-li.css';
  @import '../../assets/css/lesson.css';
</style>
