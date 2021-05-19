<template>
    <div>
        <!--        {{selected}}-->
        <!--        {{selectedGroups}}-->
        <!--        {{getUsersFromSelectedGroups()}}-->
        <div class="admin-tasks">
            <div class="a-t">
                <input class="a-t-title"
                       placeholder="Task title"
                       type="text"
                       v-model="title">
                <label class="a-t-date"> Deadline
                    <input alt="yyyy-mm-dd" class="dm-date" maxlength="10" placeholder="yyyy-mm-dd" type="text"
                           v-model="date">
                    <input alt="hh:mm:dd" class="dm-time" maxlength="8" placeholder="hh:mm:ss" type="text"
                           v-model="time">
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
        <div v-on:click="open = !open"
             v-show="!open">
            <div class="admin-users-open content-center">
                <img src="../../assets/images/iconmonstr-plus-2.svg"/>
            </div>
        </div>
        <div v-show="open">
            <div>
                <div class="admin-users">
                    <div class="a-u-interface">
                        <div
                                class="content-center a-u-i-btn"
                                v-on:click="open = !open">
                            <img src="../../assets/images/iconmonstr-minus-2.svg"/>
                        </div>
                    </div>
                    <div class="a-u-search-field content-center">
                        <input placeholder="search user" type="text" v-model="search">
                    </div>
                    <div class="a-u-users-type content-left">
                        <div v-on:click="usersButton = !usersButton">
                            users
                        </div>
                        <div v-on:click="groupsButton = !groupsButton">
                            groups
                        </div>
                    </div>
                    <div class="a-u-user-list-field">
                        <div class="a-u-user-list">
                            <div v-if="usersButton">
                                <div class="content-center">Users</div>
                                <div v-for="(user, index) in getUsersFilter()"
                                     v-on:click="addToSelected(user)">
                                    <AdminSelectedUser
                                            :user="user"
                                            v-if="user.id !== $store.state.auth.user.id"/>
                                </div>
                            </div>
                            <div v-if="groupsButton">
                                <div class="content-center">Groups</div>
                                <div v-for="(group, index) in $store.getters.getGroups"
                                     v-on:click="addToSelectedGroups(group)">
                                    <AdminSelectedUser
                                            :group="group"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import authHeader from "../../services/auth-header";
    import backendUrl from "../../store/backendUrl";
    import AdminSelectedUser from "../Task/AdminSelectedUser";
    import AdminSelectedField from "../Task/AdminSelectedField";
    import getTimestampDate from "../../js/getTimestampDate";
    import SockJS from "sockjs-client";
    import Stomp from "webstomp-client";

    export default {
        name: "AdminTasks",
        components: {
            AdminSelectedUser,
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
                date: '1999-12-12',
                time: '01:01:01'
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
            getUsersFilter() {
                let users = this.$store.getters.getUsers;
                return users.filter(c => this.getUsernameNameSurname(c.username, c.name, c.surname).toLowerCase().indexOf(this.search) > -1);
            },
            getUsernameNameSurname(username, name, surname) {
                return username + name + surname;
            },
            addToSelected(userrid) {
                if (this.selected.find((user) => user.id === userrid.id)) {
                    this.selected.splice(this.selected.indexOf(userrid), 1)
                } else {
                    this.selected.push(userrid);
                }
            },
            addToSelectedGroups(group_id) {
                if (this.selectedGroups.find((group) => group.id === group_id.id)) {
                    this.selectedGroups.splice(this.selectedGroups.indexOf(group_id), 1)
                } else {
                    this.selectedGroups.push(group_id);
                }
            },
            getUsersFromSelectedGroups() {
                if (this.selectedGroups.length > 0) {
                    let usersId = [];
                    for (let i = 0; i < this.selectedGroups.length; i++) {
                        for (let j = 0; j < this.selectedGroups[i].users.length; j++) {
                            usersId.push(this.selectedGroups[i].users[j].id);
                        }
                    }
                    return usersId;
                }
            },
            arrayUnique(arr) {
                return arr.filter((e, i, a) => a.indexOf(e) === i)
            },
            sendTasks() {
                this.socket = new SockJS(backendUrl() + "gs-guide-websocket");
                this.stompClient = Stomp.over(this.socket);

                let fd = new FormData();
                let usersId = [];
                for (var i = 0; i < this.selected.length; i++) {
                    usersId.push(this.selected[i].id);
                }
                if (this.getUsersFromSelectedGroups()) {
                    for (var i = 0; i < this.getUsersFromSelectedGroups().length; i++) {
                        usersId.push(this.getUsersFromSelectedGroups()[i]);
                    }
                }

                usersId = this.arrayUnique(usersId);

                for (var i = 0; i < this.files.length; i++) {
                    let file = this.files[i];
                    fd.append('files', file);
                    // console.log(file)
                }
                fd.append("title", this.title);
                fd.append("description", this.description);
                fd.append("sendDate", getTimestampDate());
                fd.append("deadline", this.date + ' ' + this.time);
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
