<template>
  <div class="tasks">
<!--    {{$store.getters.getTasks}}-->
    <div class="task"
      v-for="(task, index) in sortedTasks">
      <div v-text="'Title: '+task.title"></div>
      <div
        class="tasks-description"
        v-html="'Description: '+task.description"></div>
      <div class="grid-container">
        <div class="tasks-grid-item"
             v-for="(file, index) in task.fileDBSet"
             :key="index">
          <a :href="backendUrl+'files/'+file.id">
            <img :src="docxIcon">
          </a>
          <div class="filename"><span v-text="file.name"></span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import authHeader from "../../services/auth-header";
  import backendUrl from "../../store/backendUrl";
  import docxIcon from '../../assets/images/docx_icon.svg';

  export default {
    name: "Tasks",
    created() {
      document.title = "Tasks"
    },
    data() {
      return {
        docxIcon,
        backendUrl: backendUrl()
      }
    },
    async mounted() {
      await this.$store.dispatch("fetchTasksBiUserId", this.$store.state.auth.user.id);
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
