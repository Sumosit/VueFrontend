<template>
    <div>
<!--                {{selected}}-->
<!--                {{selectedGroups}}-->
        <!--        {{getUsersFromSelectedGroups()}}-->
        <div class="admin-tasks">
            <div class="a-t">
                <input class="a-t-title"
                       placeholder="Task title"
                       type="text"
                       v-model="title">
                <label class="a-t-date"> Deadline date
                    <input alt="year" class="dm-year text-align-center" maxlength="4" placeholder="yyyy" type="text"
                           v-model="year">
                    <input alt="month" class="dm-date text-align-center" maxlength="2" placeholder="mm" type="text"
                           v-model="month">
                    <input alt="day" class="dm-date text-align-center" maxlength="2" placeholder="dd" type="text"
                           v-model="day">
                </label>
                <label class="a-t-date"> Deadline time
                    <input alt="hours" class="dm-date text-align-center" maxlength="2" placeholder="hh" type="text"
                           v-model="hours">
                    <input alt="minutes" class="dm-date text-align-center" maxlength="2" placeholder="mm" type="text"
                           v-model="minutes">
                    <input alt="seconds" class="dm-date text-align-center" maxlength="2" placeholder="ss" type="text"
                           v-model="seconds">
                </label>
            </div>
            <div class="a-t">
                <label>
          <textarea class="a-t-description"
                    placeholder="Description"
                    type="text"
                    v-model="description"></textarea>
                </label>
            </div>

            <input @change="handleFileUploads" id="files" multiple ref="files" type="file"/>
            <label class="a-t-description" for="files"></label>
            <div>
                <span class="a-t-users-count">Selected users count: {{selected.length}}</span>
                <button @click="sendTasks()">Upload</button>
            </div>
        </div>
        <AdminSelectedField :open="open"
        v-on:childToParent="onChildClick"
        v-on:groupsToParent="onChildSelectedGroupsClick"/>
    </div>
</template>

<script>
    import axios from 'axios';
    import authHeader from "../../services/auth-header";
    import backendUrl from "../../store/backendUrl";
    import AdminSelectedField from "../Task/AdminSelectedField";
    import getTimestampDate from "../../js/getTimestampDate";
    import SockJS from "sockjs-client";
    import Stomp from "webstomp-client";

    export default {
        name: "AdminTasks",
        components: {
            AdminSelectedField
        },
        data() {
            return {
                usersButton: true,
                groupsButton: false,
                selectedGroups: [],
                selected: [],
                selectedLength: 0,
                search: '',
                title: '',
                description: '',
                open: true,
                year: '1999',
                month: '10',
                day: '21',
                hours: '23',
                minutes: '32',
                seconds: '32'
            }
        },
        created() {
            document.title = "Admin Tasks";
        },
        async mounted() {
            await this.$store.dispatch("fetchUsers");
            await this.$store.dispatch("fetchGroups");
        },
        watch: {
            date: function (val) {
                if (val.length === 4) {
                    this.date = this.date + "-";
                } else if (val.length === 7) {
                    this.date = this.date + "-";
                }
            },
            time: function (val) {
                if (val.length === 2) {
                    this.time = this.time + "-";
                } else if (val.length === 5) {
                    this.time = this.time + "-";
                }
            }
        },
        methods: {
            onChildClick (value) {
                this.selected = value
            },
            onChildSelectedGroupsClick (value) {
                this.selectedGroups = value
            },
            arrayUnique(arr) {
                return arr.filter((e, i, a) => a.indexOf(e) === i)
            },
            sendTasks() {
                this.socket = new SockJS(backendUrl() + "gs-guide-websocket");
                this.stompClient = Stomp.over(this.socket);
                this.stompClient.debug = () => {};

                let fd = new FormData();
                let usersId = [];
                for (var i = 0; i < this.selected.length; i++) {
                    usersId.push(this.selected[i].id);
                }
                for (var i = 0; i < this.selectedGroups.length; i++) {
                    usersId.push(this.selectedGroups[i]);
                }

                usersId = this.arrayUnique(usersId);

                for (var i = 0; i < this.files.length; i++) {
                    let file = this.files[i];
                    fd.append('files', file);
                }
                fd.append("title", this.title);
                fd.append("description", this.description);
                fd.append("sendDate", getTimestampDate());
                fd.append("deadline_year", this.year);
                fd.append("deadline_month", this.month);
                fd.append("deadline_day", this.day);
                fd.append("deadline_hours", this.hours);
                fd.append("deadline_minutes", this.minutes);
                fd.append("deadline_seconds", this.seconds);
                fd.append("userId", this.$store.state.auth.user.id);
                fd.append("usersId", usersId);
                // console.log(this.selected);
                // console.log(fd);
                console.log(usersId);
                axios.post(backendUrl() + 'api/admin/task/save', fd, {
                    headers:
                        authHeader(),
                    'Content-Type': 'multipart/form-data'
                }).then(res => {
                    for (let i = 0; i < usersId.length; i++) {
                        let msg_notification = {
                            id: null,
                            type: "New task from ",
                            message: this.title,
                            linkToChat: this.$route.path,
                            fromUserId: this.$store.state.auth.user.id,
                            userId: usersId[i]
                        };
                        console.log(msg_notification);
                        this.stompClient.send("/app/notification/" + usersId[i], JSON.stringify(msg_notification), {});
                    }
                    // console.log(res);
                }).catch(err => {
                    // console.log(err.response);
                });
            },
            handleFileUploads() {
                this.files = this.$refs.files.files;
            },
        }
    }
</script>

<style scoped>
    @import '../../assets/css/admin-tasks.css';
</style>
