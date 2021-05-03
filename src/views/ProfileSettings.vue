<template>
  <div class="profile-settings">
    <div class="name-surname">
      <input
        v-model="name"
        type="text"
        placeholder="Name is empty">
      <input
        v-model="surname"
        type="text"
        placeholder="Surname is empty">
      <button v-on:click="saveNameAndSurname">Save</button>
    </div>
    {{currentFile}}
    {{uploadStatus}}
    {{uploadError}}
    <div class="documents-wrapper">
      <div class="document">
        <div class="content-center">
          <img v-if="!getUserExtra().passport" src="../assets/images/no.svg">
          <a v-if="getUserExtra().passport" class="yes" :href="backendUrl+'files/'+getUserExtra().passport.id">
            <img src="../assets/images/yes.svg">
          </a>
        </div>
        <span v-if="!getUserExtra().passport"
              class="content-center">No passport</span>
        <span v-if="getUserExtra().passport"
              class="content-center">Passport</span>
        <label class="content-center"
               v-on:click="currentFile='passport'"
               for="passport">Upload</label>
        <input id="passport"
               type="file"
               class="no-display"
               @change="onFileChanged">
        <div v-if="currentFile==='passport' && selectedFile"
             class="content-center">
          <button @click="onUpload">Upload</button>
        </div>
        <div v-if="getUserExtra().passport"
             class="content-center doc-download">
          <a :href="backendUrl+'files/'+getUserExtra().passport.id">
            Download
          </a>
        </div>
      </div>
      <div class="document">
        <div class="content-center">
          <img v-if="!getUserExtra().diploma" src="../assets/images/no.svg">
          <a v-if="getUserExtra().diploma" class="yes" :href="backendUrl+'files/'+getUserExtra().diploma.id">
            <img src="../assets/images/yes.svg">
          </a>
        </div>
        <span v-if="!getUserExtra().diploma"
              class="content-center">No diploma</span>
        <span v-if="getUserExtra().diploma"
              class="content-center">Diploma</span>
        <label class="content-center"
               v-on:click="currentFile='diploma'"
               for="diploma">Upload</label>
        <input id="diploma"
               type="file"
               class="no-display"
               @change="onFileChanged">
        <div v-if="currentFile==='diploma' && selectedFile"
             class="content-center">
          <button @click="onUpload">Upload</button>
        </div>
        <div v-if="getUserExtra().diploma"
             class="content-center doc-download">
          <a :href="backendUrl+'files/'+getUserExtra().diploma.id">
            Download
          </a>
        </div>
      </div>
      <div class="document">
        <div class="content-center">
          <img v-if="!getUserExtra().medicalVerification" src="../assets/images/no.svg">
          <a v-if="getUserExtra().medicalVerification" class="yes"
             :href="backendUrl+'files/'+getUserExtra().medicalVerification.id">
            <img src="../assets/images/yes.svg">
          </a>
        </div>
        <span v-if="!getUserExtra().medicalVerification"
              class="content-center">No medical verification</span>
        <span v-if="getUserExtra().medicalVerification"
              class="content-center">Medical verification</span>
        <label class="content-center"
               v-on:click="currentFile='medicalVerification'"
               for="medicalVerification">Upload</label>
        <input id="medicalVerification"
               type="file"
               class="no-display"
               @change="onFileChanged">
        <div v-if="currentFile==='medicalVerification' && selectedFile"
             class="content-center">
          <button @click="onUpload">Upload</button>
        </div>
        <div v-if="getUserExtra().medicalVerification"
             class="content-center doc-download">
          <a :href="backendUrl+'files/'+getUserExtra().medicalVerification.id">
            Download
          </a>
        </div>
      </div>
      <div class="document">
        <div class="content-center">
          <img v-if="!getUserExtra().conviction" src="../assets/images/no.svg">
          <a v-if="getUserExtra().conviction" class="yes" :href="backendUrl+'files/'+getUserExtra().conviction.id">
            <img src="../assets/images/yes.svg">
          </a>
        </div>
        <span v-if="!getUserExtra().conviction"
              class="content-center">No conviction</span>
        <span v-if="getUserExtra().conviction"
              class="content-center">Conviction</span>
        <label class="content-center"
               v-on:click="currentFile='conviction'"
               for="conviction">Upload</label>
        <input id="conviction"
               type="file"
               class="no-display"
               @change="onFileChanged">
        <div v-if="currentFile==='conviction' && selectedFile"
             class="content-center">
          <button @click="onUpload">Upload</button>
        </div>
        <div v-if="getUserExtra().conviction"
             class="content-center doc-download">
          <a :href="backendUrl+'files/'+getUserExtra().conviction.id">
            Download
          </a>
        </div>
      </div>
      <div class="document">
        <div class="content-center">
          <img v-if="!getUserExtra().employmentContract" src="../assets/images/no.svg">
          <a v-if="getUserExtra().employmentContract" class="yes"
             :href="backendUrl+'files/'+getUserExtra().employmentContract.id">
            <img src="../assets/images/yes.svg">
          </a>
        </div>
        <span v-if="!getUserExtra().employmentContract"
              class="content-center">No employment contract</span>
        <span v-if="getUserExtra().employmentContract"
              class="content-center">No Employment contract</span>
        <label class="content-center"
               v-on:click="currentFile='employmentContract'"
               for="employmentContract">Upload</label>
        <input id="employmentContract"
               type="file"
               class="no-display"
               @change="onFileChanged">
        <div v-if="currentFile==='employmentContract' && selectedFile"
             class="content-center">
          <button @click="onUpload">Upload</button>
        </div>
        <div v-if="getUserExtra().employmentContract"
             class="content-center doc-download">
          <a :href="backendUrl+'files/'+getUserExtra().employmentContract .id">
            Download
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import authHeader from "../services/auth-header";
  import backendUrl from "../store/backendUrl";

  export default {
    name: "ProfileSettings",
    data() {
      return {
        name: this.$store.getters.getUser.name,
        surname: this.$store.getters.getUser.surname,
        userExtra: Object,
        selectedFile: null,
        selectedFileSize: 0,
        uploadStatus: 'Select a file',
        uploadError: '',
        currentFile: '',
        backendUrl: backendUrl()
      }
    },
    async mounted() {
      await this.$store.dispatch("fetchUser", this.$store.state.auth.user.id);
      await this.$store.dispatch("fetchUserExtra", this.$store.state.auth.user.id);
      this.setNameSurname();
    },
    updated() {
    },
    methods: {
      setNameSurname() {
        this.name = this.$store.getters.getUser.name;
        this.surname = this.$store.getters.getUser.surname;
      },
      getUserExtra() {
        this.userExtra = this.$store.getters.getUserExtra;
        return this.userExtra;
      },
      onFileChanged(event) {
        this.selectedFile = event.target.files[0];
        this.selectedFileSize = event.target.files[0].size;
        this.uploadStatus = 'File selected';
      },
      saveNameAndSurname() {
        let fd = new FormData();
        if (!this.name || this.name === "") {
          this.name = " "
        }
        fd.append("name", this.name);
        fd.append("surname", this.surname);
        fd.append("userId", this.$store.state.auth.user.id);

        axios.post(backendUrl() + "api/user/nameAndSurname/save", fd, {
          headers: authHeader()
        }).then(async res => {
          await this.$store.dispatch("fetchUser", this.$store.state.auth.user.id);
        }).catch(err => {
          console.log(err.response);
        });
      },
      onUpload() {
        if (this.selectedFileSize > 1000000000) {
          console.log("Error");
          this.uploadError = 'Размер файла слишком большой!';
          return
        }
        const formData = new FormData();
        formData.append('file', this.selectedFile, this.selectedFile.name);
        formData.append('currentFile', this.currentFile);
        formData.append('userExtraId', this.userExtra.id);
        axios.post(backendUrl() + 'api/user/userExtra/file/save', formData, {
          headers: authHeader()
        }).then(async res => {
          await this.$store.dispatch("fetchUserExtra", this.$store.state.auth.user.id);
          this.getUserExtra();
          this.selectedFile = null;
          this.selectedFileSize = 0;
          this.uploadStatus = 'Select a file';
          this.uploadError = '';
          this.currentFile = '';
          console.log(res.data);
        }).catch(err => {
          console.log(err.response);
        });
      }
    }
  }
</script>

<style scoped>
  .yes {
    width: 100%;
  }

  .profile-settings {
    padding: 8px;
    background: #f6f6f6;
    color: black;
    font-family: Arial, sans-serif;
  }

  .name-surname {
    display: inline-flex;
  }

  .name-surname > input {
    width: 221.25px;
    height: 36px;
    margin-right: 10px;
    font-size: 16px;
    background: #f6f6f6;
    border: 1px solid black;
    color: black;
  }

  .name-surname > button {
    margin: 0;
  }

  @media (min-width: 1700px) {
    .documents-wrapper {
      margin-top: 10px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 10px;
    }
  }

  @media (max-width: 1699px) {
    .documents-wrapper {
      margin-top: 10px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 10px;
    }
  }

  .documents-wrapper > .document {
    position: relative;
    word-break: break-word;
    padding: 15px;
    background: #dddddd;
    border: 1px solid black;
    border-radius: 5px;
  }

  .document > span {
    margin-top: 8px;
    font-family: Arial, sans-serif;
    font-size: 100%;
  }

  .document > div {
    margin-top: 5px;
  }

  .no-display {
    display: none;
  }

  .document > label {
    cursor: pointer;
    margin-top: 5px;
    color: #a00000;
  }

  .document > label:hover {
    color: #d20000;
  }

  .doc-download > a {
    color: black;
  }
</style>
