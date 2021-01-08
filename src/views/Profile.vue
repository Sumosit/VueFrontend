<template>
  <div>
    <div class="title">
      <span>Profile</span>
    </div>
    <div class="wrapper">
      <div v-if="currentUser.fileDB && !editProfilePhoto"
           class="profile-image">
        <img :src="backendUrl + 'files/' +$store.state.auth.user.fileDB.id">
        <div class="change-photo-activator">
          <img :src="editProfilePhotoIcon"
                v-on:click="editProfilePhoto = !editProfilePhoto">
        </div>
      </div>
      <div v-if="!currentUser.fileDB || editProfilePhoto"
           class="profile-image">
        <input type="file" @change="onFileChanged"/>
        <button @click="onUpload">Upload</button>
      </div>
      <div class="profile-info">
        <span class="username"
        >{{currentUser.username}}
        </span><br>
        <span class="email">
          {{currentUser.email}}
        </span><br>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import authHeader from "../services/auth-header";
  import backendUrl from "../store/backendUrl";
  import User from "../models/user";
  import {mapMutations} from "vuex";

  import editProfilePhotoIcon from '../assets/images/edit-profile-photo-icon.svg';

  export default {
    name: 'Profile',
    data() {
      return {
        selectedFile: null,
        backendUrl: '',
        editProfilePhoto: false,
        editProfilePhotoIcon
      }
    },
    mounted() {
      if (!this.currentUser) {
        this.$router.push('/login');
      }
      this.backendUrl = backendUrl();
    },
    methods: {
      onFileChanged(event) {
        this.selectedFile = event.target.files[0];
      },
      onUpload() {
        const formData = new FormData();
        formData.append('file', this.selectedFile, this.selectedFile.name);
        formData.append('userid', this.currentUser.id);
        axios.post(backendUrl() + 'upload', formData, {
          headers: authHeader()
        }).then(res => {
          console.log(res);
          this.$store.state.auth.user.fileDB = res.data;
          console.log(this.currentUser.fileDB);
        }).catch(err => {
          console.log(err.response);
        });
      },
    },
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      },
    }
  };
</script>

<style scoped>
  @import '../assets/css/main.css';
  @import '../assets/css/profile.css';
  @import '../assets/css/profile-grid.css';
</style>