<template>
    <div class="memories">
        <div class="memories-interface"
             v-show="loading">
            <div class="m-i">
                <input type="text" v-model="memoryName">
            </div>
            <div class="m-i">
                <button v-on:click="saveMemory">Create package</button>
            </div>
            <div class="upload-field content-center">
                <span v-show="!dragover">Choose files</span>
                <span v-show="dragover">Drag files here</span>
                <input @change="handleFileUploads" @dragleave="dragover = false" @dragover="dragover = true"
                       class="upload-input-file"
                       id="files"
                       multiple
                       ref="files"
                       type="file"/>
            </div>
            <span class="upload-files-list"
                  v-for="(file, index) in filesToUpload">
                {{file.name}}
            </span>
            <button @click="addFilesToMemory()" class="upload-btn">Upload</button>
        </div>
        <div class="memories-list"
             v-show="loading">
            <a
                    :href="'/user/memory/'+memory.id"
                    :key="index"
                    v-for="(memory, index)
                   in $store.getters.getMemory.memories">
                <div>
                    {{memory.id}}. {{memory.name}}
                </div>
            </a>
        </div>
        <div class="grid-container"
             v-show="loading">
            <div :key="index"
                 class="grid-item"
                 v-for="(file, index) in $store.getters.getMemory.fileDBSet">
                <a :href="backendUrl+'files/'+file.id">
                    <img :src="docxIcon">
                </a>
                <div class="filename">
                    <span>{{file.name}}</span>
                </div>
            </div>
        </div>
        <div class="content-center"
             v-show="!loading">
            <LoadingLdsRipple/>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import authHeader from "../../services/auth-header";
    import backendUrl from "../../store/backendUrl";
    import docxIcon from '../../assets/images/docx_icon.svg';
    import LoadingLdsRipple from "../Loading/LoadingLdsRipple"

    export default {
        name: "Memories",
        components: {
            LoadingLdsRipple
        },
        data() {
            return {
                memoryName: '',
                memoryId: Number.parseInt(this.$route.params.memoryId),
                memory: Object,
                docxIcon,
                backendUrl: backendUrl(),
                loading: false,
                dragover: false,
                filesToUpload: []
            }
        },
        async mounted() {
            await this.$store.dispatch("fetchMemory", {
                userId: this.$store.state.auth.user.id,
                memoryId: this.$route.params.memoryId
            });
            this.memory = this.$store.getters.getMemory
                .then(setTimeout(() => {
                    this.loading = true;
                }, 1000));
        },
        methods: {
            saveMemory() {
                let fd = new FormData();
                fd.append("userId", this.$store.state.auth.user.id);
                fd.append("memoryId", this.$route.params.memoryId);
                fd.append("memoryName", this.memoryName);
                // console.log(fd);

                axios.post(backendUrl() + "api/user/memory/save", fd, {
                    headers: authHeader()
                }).then(async res => {
                    await this.$store.dispatch("fetchMemory", {
                        userId: this.$store.state.auth.user.id,
                        memoryId: this.$route.params.memoryId
                    });
                    this.memories = this.$store.getters.getMemory;
                    // console.log(res);
                }).catch(err => {
                    console.log(err.response);
                });
            },
            handleFileUploads() {
                this.files = this.$refs.files.files;
                this.filesToUpload = this.files;
            },
            addFilesToMemory() {
                let fd = new FormData();
                for (var i = 0; i < this.files.length; i++) {
                    let file = this.files[i];
                    fd.append('files', file);
                }
                fd.append("memoryId", this.$route.params.memoryId);
                // console.log(fd);
                axios.post(backendUrl() + 'api/user/memory/saveFiles', fd, {
                    headers:
                        authHeader(),
                    'Content-Type': 'multipart/form-data'
                }).then(async res => {
                    await this.$store.dispatch("fetchMemory", {
                        userId: this.$store.state.auth.user.id,
                        memoryId: this.$route.params.memoryId
                    });
                    // console.log(res);
                    this.files = [];
                    this.filesToUpload = this.files;
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
