<template>
    <div class="wrapper">
        <div class="profile-image content-center"
             v-show="!editProfilePhoto">
            <img :src="backendUrl + 'files/' +$store.getters.getUser.fileDB.id" v-if="$store.getters.getUser.fileDB">
            <img src="../../assets/images/user.svg" v-else-if="!$store.getters.getUser.fileDB">
            <div class="change-photo-activator"
                 v-if="Number.parseInt($route.params.userId) === Number.parseInt($store.state.auth.user.id)">
                <img :src="editProfilePhotoIcon"
                     v-on:click="editProfilePhoto = !editProfilePhoto">
            </div>
        </div>
        <div class="profile-image"
             v-show="!currentUser.fileDB && editProfilePhoto && Number.parseInt($route.params.userId) === Number.parseInt(currentUser.id)">
            <div class="upload-field content-center">
                <span v-show="!dragover">Choose files</span>
                <span v-show="dragover">Drag files here</span>
                <input @change="onFileChanged" @dragleave="dragover = false" @dragover="dragover = true"
                       class="upload-input-file"
                       id="uploadImage"
                       type="file"/>
                {{uploadStatus}}
            </div>
            <button @click="onUpload()" class="upload-btn">Upload</button>
            <div class="change-photo-activator">
                <img :src="editProfilePhotoIcon"
                     v-on:click="editProfilePhoto = !editProfilePhoto">
            </div>
        </div>
        <div class="profile-info">
            <span class="username">
                {{$store.getters.getUser.username}}
            </span>
            <span class="email">
                {{$store.getters.getUser.email}}
            </span>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import authHeader from "../../services/auth-header";
    import backendUrl from "../../store/backendUrl";
    import {mapMutations} from "vuex";
    import ButtonDiv from "../Buttons/ButtonDiv";

    import editProfilePhotoIcon from '../../assets/images/edit-profile-photo-icon.svg';

    export default {
        name: 'ProfileInfo',
        props: ['userProfile'],
        components: {
            ButtonDiv
        },
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
                dragover: false
            }
        },
        created() {
            document.title = "Profile info";
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
                }).then(async res => {
                    console.log(res);
                    this.currentUser.fileDB = res.data;
                    localStorage.setItem('user', JSON.stringify(this.currentUser));
                    await this.$store.dispatch("fetchUser", this.$route.params.userId);
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

</style>
