<template>
  <div class="lesson-main">
    <form @submit.prevent class="lessons-form">
      <input id="name"
             placeholder="Task name"
             v-model="name">
      <input id="description"
             placeholder="Task description"
             v-model="description">
      <label for="files" class="input-file">
        <img class="" src="../../assets/images/cloud-upload-signal-svgrepo-com.svg">
        <input id="files"
               ref="files"
               type="file"
               class="no-display"
               multiple
               @change="handleFileUploads">
      </label>
      <ButtonDiv
        v-on:click="saveTask"
        :ButtonName="{name: 'Save task'}"
        :lighter="true"
        :isButton="true"/>
    </form>
    <ul v-if="sortedLessonsTasks">
      <li class="li-block"
          v-for="(task, index) in sortedLessonsTasks"
          :key="index">
        <div class="lessons-wrapper">
          <div>
            <ButtonDivLink
              :ButtonNameAndLink="{
          name: task.name,
          link: '/user/lessons/tasks/'+lessonId+'/'+task.id
        }"/>
          </div>
          <div v-on:click="deleteTask(task.id)">
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
  import ButtonDivLink from "../Buttons/ButtonRouterLink";
  import ButtonDiv from "../Buttons/ButtonDiv";
  import ButtonDelete from "../Buttons/ButtonDelete";

  export default {
    name: "LessonTasks",
    data() {
      return {
        description: '',
        name: '',
        lessonId: Number.parseInt(this.$route.params.lessonId),
        saveButtonName: 'Save task'
      }
    },
    components: {
      ButtonDivLink,
      ButtonDiv,
      ButtonDelete
    },
    async mounted() {
      await this.$store.dispatch('fetchLessonTasks', this.currentUser.id, this.lessonId);
    },
    methods: {
      handleFileUploads() {
        this.files = this.$refs.files.files;
      },
      deleteTask(taskId) {
        axios.get(backendUrl() + "api/user/lessons/tasks/delete/"+this.$store.state.auth.user.id+"/"+this.lessonId+"/"+taskId, {
          headers: authHeader()
        }).then(async res => {
          await this.$store.dispatch('fetchLessonTasks', this.currentUser.id, this.lessonId);
          console.log(res);
        }).catch(err => {
          console.log(err.response);
        });
      },
      saveTask() {
        let formData = new FormData();
        for (var i = 0; i < this.files.length; i++) {
          let file = this.files[i];
          formData.append('files', file);
        }
        formData.append('userId', this.$store.state.auth.user.id)
        formData.append('name', this.name);
        formData.append('description', this.description);
        formData.append('lessonId', this.$route.params.lessonId);

        axios.post(backendUrl() + "api/user/lessons/tasks/save", formData, {
          headers: authHeader()
        }).then(res => {
          this.$store.dispatch('fetchLessonTasks', this.currentUser.id, this.lessonId);
          this.lessons = this.$store.getters.getLessonTasks;
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
      sortedLessonsTasks: function () {
        function compare(a, b) {
          if (a.id > b.id)
            return -1;
          if (a.id < b.id)
            return 1;
          return 0;
        }

        return this.$store.getters.getLessonTasks.sort(compare);
      }
    }
  }
</script>

<style scoped>
  @import '../../assets/css/default-ul-li.css';
  @import '../../assets/css/lesson.css';
</style>
