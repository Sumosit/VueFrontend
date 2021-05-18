<template>
    <div class="profile-settings">
        <div class="name-surname">
            <div>
                <label>Name</label>
                <input type="text"
                       v-model="$store.getters.getUser.name"/>
            </div>
            <div>
                <label>Surname</label>
                <input type="text"
                       v-model="$store.getters.getUser.surname"/>
            </div>
            <div>
                <label>Username</label>
                <input type="text"
                       v-model="$store.getters.getUser.username"/>
            </div>
            <div>
                <label>Profession</label>
                <input type="text"
                       v-model="$store.getters.getUser.profession"/>
            </div>
            <div v-show="error">
                {{error}}
            </div>
        </div>
        <div class="name-surname-btn">
            <button v-on:click="saveNameAndSurname">Save</button>
        </div>
        <!--                {{currentFile}}-->
        <!--                {{uploadStatus}}-->
        <!--                {{uploadError}}-->
        <div class="documents-wrapper">
            <div class="document"
                 v-for="(document, index) in sortedDocuments">
                <div class="content-center">
                    <img src="../../assets/images/no.svg" v-if="!document.fileDB">
                    <a :href="backendUrl+'files/'+document.fileDB.id" class="yes"
                       v-if="document.fileDB">
                        <img src="../../assets/images/yes.svg">
                    </a>
                </div>
                <span class="content-center"
                      v-if="!document.fileDB">No {{document.name}}</span>
                <span class="content-center"
                      v-if="document.fileDB">{{document.name}}</span>
                <label class="content-center"
                       for="passport"
                       v-on:click="currentFile=document.name">Upload</label>
                <input @change="onFileChanged"
                       class="no-display"
                       id="passport"
                       type="file">
                <div class="content-center"
                     v-if="currentFile===document.name && selectedFile">
                    <button @click="onUpload">Upload</button>
                </div>
                <div class="content-center doc-download"
                     v-if="document.fileDB">
                    <a :href="backendUrl+'files/'+document.fileDB.id">
                        Download
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import authHeader from "../../services/auth-header";
    import backendUrl from "../../store/backendUrl";

    export default {
        name: "ProfileSettings",
        props: ['userProfile'],
        data() {
            return {
                name: '',
                surname: '',
                username: '',
                userExtra: Object,
                selectedFile: null,
                selectedFileSize: 0,
                uploadStatus: 'Select a file',
                uploadError: '',
                currentFile: '',
                backendUrl: backendUrl(),
                error: ''
            }
        },
        created() {
            document.title = "Profile settings";
        },
        async mounted() {
            if (Number.parseInt(this.$route.params.userId) !== Number.parseInt(this.$store.state.auth.user.id)) {
                this.$router.go(-1);
            }
        },
        updated() {
        },
        methods: {
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
                if (!this.$store.getters.getUser.name
                    || !this.$store.getters.getUser.surname) {
                    this.error = "Name and Surname must saved together";
                    return;
                }
                if (!this.$store.getters.getUser.username
                    || !this.$store.getters.getUser.profession) {
                    this.error = "Username and professional fields must be filled";
                    return;
                }
                fd.append("name", this.$store.getters.getUser.name);
                fd.append("surname", this.$store.getters.getUser.surname);
                fd.append("username", this.$store.getters.getUser.username);
                fd.append("profession", this.$store.getters.getUser.profession);
                fd.append("userId", this.$store.getters.getUser.id);
                console.log(this.$store.getters.getUser.id);

                axios.post(backendUrl() + "api/user/nameSurnUserProf/save", fd, {
                    headers: authHeader()
                }).then(async res => {
                    await this.$store.dispatch("fetchUser", this.$store.getters.getUser.id);
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
                formData.append('userExtraId', this.$store.getters.getUserExtra.id);
                axios.post(backendUrl() + 'api/user/userExtra/file/save', formData, {
                    headers: authHeader()
                }).then(async res => {
                    await this.$store.dispatch("fetchUserExtra", this.$store.state.auth.user.id);
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
        },
        computed: {
            sortedDocuments: function () {
                function compare(a, b) {
                    if (a.id < b.id)
                        return -1;
                    if (a.id > b.id)
                        return 1;
                    return 0;
                }

                return this.$store.getters.getUserExtra.documents.sort(compare);
            }
        }

    }
</script>

<style scoped>
    @import '../../assets/css/profile-settings.css';
</style>
