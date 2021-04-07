<template>
  <div>
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
        <label class="profile-avatar-upload" for="uploadImage">
          <span>Загрузка изображения профиля</span>
          <span class="upload-btn">{{uploadStatus}}</span>
          <span
            v-if="selectedFile">
            {{selectedFile.name}}
          </span>
          <span class="upload-error" v-show="uploadError">
            {{uploadError}}
          </span>
          <input style="display: none"
                 id="uploadImage" type="file"
                 @change="onFileChanged"/>
        </label>
        <div class="change-photo-activator">
          <img :src="editProfilePhotoIcon"
               v-on:click="editProfilePhoto = !editProfilePhoto">
        </div>
        <button @click="onUpload">Upload</button>
      </div>
      <div class="profile-info">
        <span class="button button-instrument"
              :class="{'button-hover': !buttonHover,
                'button-leave': buttonHover}"
              @mouseover="buttonHover = false"
              @mouseleave="buttonHover = true"
              v-on:click="EditProfileResume">
            add/edit resume
        </span>
        <span class="username">
          {{currentUser.username}}
        </span>
        <span class="email">
          {{currentUser.email}}
        </span>
        <div class="edit-profile-info-resume">
          <!--          <img :src="editProfilePhotoIcon"-->
          <!--               v-on:click="editProfileResume = !editProfileResume">-->
        </div>
        <span class="resume">
          <div id="resumeSave"
               v-show="editProfileResume">
            <textarea v-model="currentUser.resume"></textarea>
            <ButtonDiv
              @click="sendUserResume"
              :ButtonName="{name: 'Save user resume'}"
              :lighter="true"
              :isButton="true"/>
          </div>
        </span>
        <span v-if="currentUser.resume && !editProfileResume" class="resume">
          <span class="text-indent" v-for="(resume, index) in currentUser.resume.split('\n')"
                :key="index">
            {{resume}}
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import authHeader from "../services/auth-header";
  import backendUrl from "../store/backendUrl";
  import {mapMutations} from "vuex";
  import ButtonDiv from "../components/Buttons/ButtonDiv";

  import editProfilePhotoIcon from '../assets/images/edit-profile-photo-icon.svg';

  export default {
    name: 'Profile',
    data() {
      return {
        selectedFile: null,
        selectedFileSize: 0,
        backendUrl: '',
        editProfilePhoto: false,
        editProfileResume: false,
        buttonHover: false,
        editProfilePhotoIcon,
        uploadError: false,
        uploadStatus: 'Выберите файл',
        resume: ''
      }
    },
    components: {
      ButtonDiv
    },
    created() {
      document.title = "Profile";
    },
    mounted() {
      if (!this.currentUser) {
        this.$router.push('/login');
      }
      this.backendUrl = backendUrl();
    },
    methods: {
      EditProfileResume() {
        this.editProfileResume = !this.editProfileResume;
        this.$nextTick(() => {
          let element = document.getElementById("resumeSave");
          element.scrollIntoView({behavior: "smooth"});
        })
      },
      sendUserResume() {
        let fd = new FormData();
        fd.append('userId', this.currentUser.id,);
        fd.append('resume', this.currentUser.resume);
        console.log(this.resume);
        axios.post(backendUrl() + "api/user/send-resume", fd, {
          headers: authHeader()
        }).then(res => {
          localStorage.setItem('user', JSON.stringify(this.currentUser));
          console.log(res);
        }).catch(err => {
          console.log(err.response)
        });
        this.editProfileResume = true;
      },
      onFileChanged(event) {
        this.selectedFile = event.target.files[0];
        this.selectedFileSize = event.target.files[0].size;
        this.uploadStatus = 'Файл выбран';
      },
      onUpload() {
        if (this.selectedFileSize > 1000000000) {
          console.log("Error");
          this.uploadError = 'Размер файла слишком большой!';
          return
        }
        const formData = new FormData();
        formData.append('file', this.selectedFile, this.selectedFile.name);
        formData.append('userid', this.currentUser.id);
        axios.post(backendUrl() + 'upload', formData, {
          headers: authHeader()
        }).then(res => {
          console.log(res);
          this.currentUser.fileDB = res.data;
          localStorage.setItem('user', JSON.stringify(this.currentUser));
          this.editProfilePhoto = false;
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
  @import '../assets/css/profile-grid.css';
</style>
