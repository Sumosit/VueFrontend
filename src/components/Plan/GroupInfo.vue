<template>
    <div class="salary">
        <div class="name-surname">
            <div>
                <label>Group name:</label>
                <input type="text" v-if="isAdmin" v-model="group.name"/>
                <span v-else-if="!isAdmin">{{group.name}}</span>
            </div>
            <div class="name-surname-btn" v-if="isAdmin">
                <button v-on:click="saveGroupName">Save name</button>
            </div>
        </div>
        <div v-if="isAdmin">
            <button class="clearfix content-center" v-on:click="open = !open">Add users</button>
            <div style="margin-top: 5px">Selected users count: {{selected.length}}</div>
            <button class="clearfix content-center" v-if="selected.length > 0" v-on:click="saveUsers">Save users
            </button>
        </div>
        <table v-if="group.users.length > 0">
            <thead>
            <tr class="admin-groups-head">
                <th class="table-name-surname">Username</th>
                <th class="table-name-surname">Name</th>
                <th class="table-name-surname">Surname</th>
                <th>Profession</th>
                <th></th>
            </tr>
            </thead>
            <tbody class="admin-groups-body"
                   v-for="(user, index) in group.users">
            <tr>
                <router-link :to="'/user/profile/'+user.id+'/info'"
                             class="cursor-pointer"
                             tag="td">
                    <span>{{user.username}}</span>
                </router-link>
                <td>
                    <span>{{user.name}}</span>
                </td>
                <td>
                    <span>{{user.surname}}</span>
                </td>
                <td>
                    <span>{{user.profession}}</span>
                </td>
                <td>
                    <div class="content-center">
                        <img class="width25 height-auto clearfix cursor-pointer"
                             src="../../assets/images/icons8-delete.svg"
                             v-on:click="deleteUserFromGroup(user.id)">
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
        <div v-else>
            <span class="clearfix content-center">No users</span>
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
                    <div class="a-u-user-list-field">
                        <div class="a-u-user-list">
                            <div v-for="(user, index) in getUsersFilter()"
                                 v-on:click="addToSelected(user)">
                                <AdminSelectedUser
                                        :user="user"
                                        v-if="user.id !== $store.state.auth.user.id"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import backendUrl from "../../store/backendUrl";
    import axios from "axios";
    import authHeader from "../../services/auth-header";
    import AdminSelectedUser from "../Task/AdminSelectedUser";

    export default {
        name: "GroupInfo",
        components: {
            AdminSelectedUser
        },
        data() {
            return {
                group: Object,
                open: false,
                search: '',
                selected: []
            }
        },
        created() {
            document.title = 'Group info';
        },
        async mounted() {
            await this.$store.dispatch('fetchUser', this.$store.state.auth.user.id);
            await this.$store.dispatch('fetchUsers');
            this.getGroup();
        },
        methods: {
            async getGroup() {
                this.group = (await axios.get(backendUrl() + 'api/group/one/' + this.$route.params.groupId,
                    {
                        headers: authHeader()
                    })).data;
            },
            deleteUserFromGroup(userId) {
                let fd = new FormData();
                fd.append("groupnpmId", this.group.id);
                fd.append("userId", userId);
                axios.post(backendUrl() + "api/admin/group/delete/user", fd, {
                    headers: authHeader()
                }).then(async res => {
                    this.getGroup();
                }).catch(err => {
                    console.log(err.response);
                });
            },
            saveGroupName() {
                let fd = new FormData();
                fd.append("groupId", this.group.id);
                fd.append("name", this.group.name);
                console.log(this.$store.getters.getUser.id);
                axios.post(backendUrl() + "api/admin/group/change/name", fd, {
                    headers: authHeader()
                }).then(async res => {
                    this.getGroup();
                }).catch(err => {
                    console.log(err.response);
                });
            },
            saveUsers() {
                let fd = new FormData();
                let usersId = [];
                for (var i = 0; i < this.selected.length; i++) {
                    usersId.push(this.selected[i].id);
                }
                fd.append("groupId", this.$route.params.groupId);
                fd.append("usersId", usersId);
                console.log(this.$route.params.groupId);
                console.log(usersId);
                axios.post(backendUrl() + 'api/admin/group/add/users', fd, {
                    headers: authHeader()
                }).then(res => {
                    this.getGroup();
                }).catch(err => {
                    console.log(err.response);
                });
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
            getUsersFilter() {
                let users = this.$store.getters.getUsers;
                return users.filter(c => this.getUsernameNameSurname(c.username, c.name, c.surname).toLowerCase().indexOf(this.search) > -1);
            },
        },
        computed: {
            isAdmin() {
                if (this.$store.state.auth.status.loggedIn) {
                    return this.$store.state.auth.user.roles.includes('ROLE_ADMIN')
                }
            },
        }
    }
</script>

<style scoped>
    @import '../../assets/css/salary.css';
    @import '../../assets/css/profile-settings.css';
    @import '../../assets/css/admin-group.css';
    @import '../../assets/css/group-info.css';
</style>
