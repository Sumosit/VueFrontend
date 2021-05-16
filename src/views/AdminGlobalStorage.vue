<template>
    <div>
        <div class="storage">
            <input @change="handleFileUploads" id="files" multiple ref="files" type="file"/>
            <label for="files">Choose file</label>
            <button @click="submitFiles()">Upload</button>

            <!--    {{allStorageFiles()}}-->
            <div class="admin-storage-grid-container">
                <div :key="index"
                     class="admin-storage-grid-item"
                     v-for="(file, index) in allStorageFiles()">
                    <a :href="file.url">
                        <img :src="docxIcon">
                    </a>
                    <div class="filename">
                        <span>{{file.name}}</span>
                    </div>
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
        name: "AdminGlobalStorage",
        data() {
            return {
                backendUrl: '',
                docxIcon
            }
        },
        created() {
            document.title = "Admin global storage";
        },
        async mounted() {
            await this.$store.dispatch('fetchAllFiles');
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
                // console.log(formData);
                axios.post(backendUrl() + 'user/storage/upload', formData, {
                    headers:
                        authHeader(),
                    'Content-Type': 'multipart/form-data'
                }).then(async res => {
                    // console.log(res);
                    await this.$store.dispatch('fetchAllFiles');
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
