<template>
  <div class="memories">
    <div class="memories-interface">
      <div class="m-i">
        <input type="text" v-model="memoryName">
      </div>
      <div class="m-i">
        <button v-on:click="saveMemory">Create package</button>
      </div>
      <input style="display: block; margin-top: 5px" id="files" ref="files" type="file" multiple @change="handleFileUploads"/>
      <label for="files"></label>
      <button @click="addFilesToMemory()">Upload</button>
    </div>
    <div class="memories-list">
      <a
        :href="'/user/memory/'+memory.id"
        v-for="(memory, index)
                   in $store.getters.getMemory.memories"
        :key="index">
        <div>
          {{memory.id}}. {{memory.name}}
        </div>
      </a>
    </div>
    <div class="grid-container">
      <div class="grid-item"
           v-for="(file, index) in $store.getters.getMemory.fileDBSet"
           :key="index">
        <a :href="backendUrl+'files/'+file.id">
          <img :src="docxIcon">
        </a>
        <div class="filename">
          <span>{{file.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import authHeader from "../../services/auth-header";
  import backendUrl from "../../store/backendUrl";
  import docxIcon from '../../assets/images/docx_icon.svg';

  export default {
    name: "Memories",
    data() {
      return {
        memoryName: '',
        memoryId: Number.parseInt(this.$route.params.memoryId),
        memory: Object,
        docxIcon,
        backendUrl: backendUrl()
      }
    },
    async mounted() {
      await this.$store.dispatch("fetchMemory", {
        userId: this.$store.state.auth.user.id,
        memoryId: this.memoryId
      });
      this.memory = this.$store.getters.getMemory;
    },
    methods: {
      saveMemory() {
        let fd = new FormData();
        fd.append("userId", this.$store.state.auth.user.id);
        fd.append("memoryId", this.memoryId);
        fd.append("memoryName", this.memoryName);
        console.log(fd);

        axios.post(backendUrl() + "api/user/memory/save", fd, {
          headers: authHeader()
        }).then(async res => {
          await this.$store.dispatch("fetchMemory", {
            userId: this.$store.state.auth.user.id,
            memoryId: this.memoryId
          });
          this.memories = this.$store.getters.getMemory;
          console.log(res);
        }).catch(err => {
          console.log(err.response);
        });
      },
      handleFileUploads() {
        this.files = this.$refs.files.files;
      },
      addFilesToMemory() {
        let fd = new FormData();
        for (var i = 0; i < this.files.length; i++) {
          let file = this.files[i];
          fd.append('files', file);
        }
        fd.append("memoryId", this.memoryId);
        console.log(fd);
        axios.post(backendUrl() + 'api/user/memory/saveFiles', fd, {
          headers:
              authHeader(),
          'Content-Type': 'multipart/form-data'
        }).then(async res => {
          await this.$store.dispatch("fetchMemory", {
            userId: this.$store.state.auth.user.id,
            memoryId: this.memoryId
          });
          console.log(res);
        }).catch(err => {
          console.log(err.response);
        });
      }
    }
  }
</script>

<style scoped>
  @import '../../assets/css/memories.css';
</style>
