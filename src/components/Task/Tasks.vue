<template>
  <div class="tasks">
    <div class="task"
         v-show="loading"
         v-for="(task, index) in sortedTasks">
      <div v-text="'Title: '+task.title"></div>
      <div
        class="tasks-description"
        v-html="'Description: '+task.description"></div>
      <div class="tasks-grid-container">
        <div class="tasks-grid-item"
             v-for="(file, index) in task.fileDBSet"
             :key="index">
          <a :href="backendUrl+'files/'+file.id">
            <img :src="docxIcon">
          </a>
          <div class="filename"><span v-text="file.name"></span></div>
        </div>
      </div>
      <hr>
    </div>
    <div class="content-center"
         v-show="!loading">
      <LoadingLdsRipple/>
    </div>
  </div>
</template>

<script>
  import authHeader from "../../services/auth-header";
  import backendUrl from "../../store/backendUrl";
  import docxIcon from '../../assets/images/docx_icon.svg';
  import LoadingLdsRipple from "../Loading/LoadingLdsRipple"

  export default {
    name: "Tasks",
    components: {
      LoadingLdsRipple
    },
    data() {
      return {
        docxIcon,
        backendUrl: backendUrl(),
        loading: false
      }
    },
    created() {
      document.title = "Tasks"
    },
    async mounted() {
      await this.$store.dispatch("fetchTasksBiUserId", this.$store.state.auth.user.id)
          .then(setTimeout(() => {
            this.loading = true;
          }, 1000));
    },
    computed: {
      sortedTasks: function () {
        function compare(a, b) {
          if (a.id > b.id)
            return -1;
          if (a.id < b.id)
            return 1;
          return 0;
        }

        return this.$store.getters.getTasks.sort(compare);
      }
    }
  }
</script>

<style scoped>
  @import '../../assets/css/tasks.css';
</style>
