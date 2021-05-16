<template>
    <div class="profile-settings">
        <div class="name-surname">
            <input
                    placeholder="Name is empty"
                    type="text"
                    v-model="name">
            <input
                    placeholder="Surname is empty"
                    type="text"
                    v-model="surname">
            <button v-on:click="saveNameAndSurname">Save</button>
        </div>
        {{currentFile}}
        {{uploadStatus}}
        {{uploadError}}
        <div class="documents-wrapper">
            <div class="document">
                <div class="content-center">
                    <img src="../../assets/images/no.svg" v-if="!getUserExtra().passport">
                    <a :href="backendUrl+'files/'+getUserExtra().passport.id" class="yes"
                       v-if="getUserExtra().passport">
                        <img src="../../assets/images/yes.svg">
                    </a>
                </div>
                <span class="content-center"
                      v-if="!getUserExtra().passport">No passport</span>
                <span class="content-center"
                      v-if="getUserExtra().passport">Passport</span>
                <label class="content-center"
                       for="passport"
                       v-on:click="currentFile='passport'">Upload</label>
                <input @change="onFileChanged"
                       class="no-display"
                       id="passport"
                       type="file">
                <div class="content-center"
                     v-if="currentFile==='passport' && selectedFile">
                    <button @click="onUpload">Upload</button>
                </div>
                <div class="content-center doc-download"
                     v-if="getUserExtra().passport">
                    <a :href="backendUrl+'files/'+getUserExtra().passport.id">
                        Download
                    </a>
                </div>
            </div>
            <div class="document">
                <div class="content-center">
                    <img src="../../assets/images/no.svg" v-if="!getUserExtra().diploma">
                    <a :href="backendUrl+'files/'+getUserExtra().diploma.id" class="yes" v-if="getUserExtra().diploma">
                        <img src="../../assets/images/yes.svg">
                    </a>
                </div>
                <span class="content-center"
                      v-if="!getUserExtra().diploma">No diploma</span>
                <span class="content-center"
                      v-if="getUserExtra().diploma">Diploma</span>
                <label class="content-center"
                       for="diploma"
                       v-on:click="currentFile='diploma'">Upload</label>
                <input @change="onFileChanged"
                       class="no-display"
                       id="diploma"
                       type="file">
                <div class="content-center"
                     v-if="currentFile==='diploma' && selectedFile">
                    <button @click="onUpload">Upload</button>
                </div>
                <div class="content-center doc-download"
                     v-if="getUserExtra().diploma">
                    <a :href="backendUrl+'files/'+getUserExtra().diploma.id">
                        Download
                    </a>
                </div>
            </div>
            <div class="document">
                <div class="content-center">
                    <img src="../../assets/images/no.svg" v-if="!getUserExtra().medicalVerification">
                    <a :href="backendUrl+'files/'+getUserExtra().medicalVerification.id" class="yes"
                       v-if="getUserExtra().medicalVerification">
                        <img src="../../assets/images/yes.svg">
                    </a>
                </div>
                <span class="content-center"
                      v-if="!getUserExtra().medicalVerification">No medical verification</span>
                <span class="content-center"
                      v-if="getUserExtra().medicalVerification">Medical verification</span>
                <label class="content-center"
                       for="medicalVerification"
                       v-on:click="currentFile='medicalVerification'">Upload</label>
                <input @change="onFileChanged"
                       class="no-display"
                       id="medicalVerification"
                       type="file">
                <div class="content-center"
                     v-if="currentFile==='medicalVerification' && selectedFile">
                    <button @click="onUpload">Upload</button>
                </div>
                <div class="content-center doc-download"
                     v-if="getUserExtra().medicalVerification">
                    <a :href="backendUrl+'files/'+getUserExtra().medicalVerification.id">
                        Download
                    </a>
                </div>
            </div>
            <div class="document">
                <div class="content-center">
                    <img src="../../assets/images/no.svg" v-if="!getUserExtra().conviction">
                    <a :href="backendUrl+'files/'+getUserExtra().conviction.id" class="yes"
                       v-if="getUserExtra().conviction">
                        <img src="../../assets/images/yes.svg">
                    </a>
                </div>
                <span class="content-center"
                      v-if="!getUserExtra().conviction">No conviction</span>
                <span class="content-center"
                      v-if="getUserExtra().conviction">Conviction</span>
                <label class="content-center"
                       for="conviction"
                       v-on:click="currentFile='conviction'">Upload</label>
                <input @change="onFileChanged"
                       class="no-display"
                       id="conviction"
                       type="file">
                <div class="content-center"
                     v-if="currentFile==='conviction' && selectedFile">
                    <button @click="onUpload">Upload</button>
                </div>
                <div class="content-center doc-download"
                     v-if="getUserExtra().conviction">
                    <a :href="backendUrl+'files/'+getUserExtra().conviction.id">
                        Download
                    </a>
                </div>
            </div>
            <div class="document">
                <div class="content-center">
                    <img src="../../assets/images/no.svg" v-if="!getUserExtra().employmentContract">
                    <a :href="backendUrl+'files/'+getUserExtra().employmentContract.id" class="yes"
                       v-if="getUserExtra().employmentContract">
                        <img src="../../assets/images/yes.svg">
                    </a>
                </div>
                <span class="content-center"
                      v-if="!getUserExtra().employmentContract">No employment contract</span>
                <span class="content-center"
                      v-if="getUserExtra().employmentContract">No Employment contract</span>
                <label class="content-center"
                       for="employmentContract"
                       v-on:click="currentFile='employmentContract'">Upload</label>
                <input @change="onFileChanged"
                       class="no-display"
                       id="employmentContract"
                       type="file">
                <div class="content-center"
                     v-if="currentFile==='employmentContract' && selectedFile">
                    <button @click="onUpload">Upload</button>
                </div>
                <div class="content-center doc-download"
                     v-if="getUserExtra().employmentContract">
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
    import authHeader from "../../services/auth-header";
    import backendUrl from "../../store/backendUrl";

    export default {
        name: "ProfileSettings",
        props: ['userProfile'],
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
            if (Number.parseInt(this.$route.params.userId) !== Number.parseInt(this.$store.state.auth.user.id)) {
                this.$router.go(-1);
            }
            await this.setNameSurname();
        },
        updated() {
        },
        methods: {
            async setNameSurname() {
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
                fd.append("userId", this.userProfile.id);

                axios.post(backendUrl() + "api/user/nameAndSurname/save", fd, {
                    headers: authHeader()
                }).then(async res => {
                    await this.$store.dispatch("fetchUser", this.userProfile.id);
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
                    await this.$store.dispatch("fetchUserExtra", this.userProfile.id);
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
