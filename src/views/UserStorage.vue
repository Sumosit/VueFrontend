<template>
  <div>
    <input id="files" ref="files" type="file" multiple @change="handleFileUploads"/>
    <label for="files">Choose file</label>
    <button @click="submitFiles()">Upload</button>

<!--    {{allStorageFiles()}}-->
    <div class="grid-container">
      <div class="grid-item"
           v-for="(file, index) in allStorageFiles()"
           :key="index"
           v-if="file.type==='image/jpeg' ||
                  file.type==='image/png' ||
                   file.type==='image/gif'">
        <a :href="file.url">
          <img :src="file.url">
        </a>
        <div class="filename">
          <span>{{file.type}}</span>
        </div>
      </div>
      <div class="grid-item"
           v-for="(file, index) in allStorageFiles()"
           :key="index"
           v-if="file.type==='application/octet-stream'">
        <a :href="file.url">
          <img :src="docxIcon">
        </a>
        <div class="filename">
          <span>{{file.type}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import backendUrl from "../store/backendUrl";
  import axios from 'axios';
  import authHeader from "../services/auth-header";
  import docxIcon from '../assets/images/docx_icon.svg';

  export default {
    name: "UserGlobalStorage",
    data() {
      return {
        backendUrl: '',
        docxIcon
      }
    },
    mounted() {
      this.$store.dispatch('fetchStorageFiles');
      this.backendUrl = backendUrl();
    },
    methods: {
      handleFileUploads() {
        this.files = this.$refs.files.files;
      },
      allStorageFiles() {
        return this.$store.getters.allStorageFiles;
      },
      submitFiles() {
        let formData = new FormData();
        for (var i = 0; i < this.files.length; i++) {
          let file = this.files[i];
          formData.append('files', file);
        }
        console.log(formData);
        axios.post(backendUrl() + 'user/storage/upload', formData, {
          headers:
              authHeader(),
              'Content-Type': 'multipart/form-data'
        }).then(res => {
          console.log(res);
          this.$store.dispatch('fetchStorageFiles');
        }).catch(err => {
          console.log(err.response);
        });
      },
    }
  }
</script>

<style scoped>
  @import '../assets/css/storage.css';
</style>
