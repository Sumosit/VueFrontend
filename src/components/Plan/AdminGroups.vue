<template>
    <div class="admin-plan">
        <div class="admin-plan-form">
            <input type="text" v-model="groupName">
            <button @click="createGroup()" class="content-center">Create Group</button>
        </div>
        <hr>
        <table>
            <thead>
            <tr class="admin-groups-head">
                <th class="group-name">Group name</th>
                <th>Group users</th>
            </tr>
            </thead>
            <tbody class="admin-groups-body">
            <tr v-for="(group, index) in $store.getters.getGroups">
                <router-link :to="'/user/group-info/'+group.id" tag="td">{{group.name}}</router-link>
                <td style="overflow: hidden; height: 35px;">
                    <span v-if="group.users.length > 0">{{getGroupNames(group.users)}}</span>
                    <span v-else>no users</span>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';
    import authHeader from "../../services/auth-header";
    import backendUrl from "../../store/backendUrl";

    export default {
        name: "AdminGroups",
        props: ['mainStompClient'],
        data() {
            return {
                groupName: ''
            }
        },
        created() {
            document.title = "Admin plan | Groups"
        },
        async mounted() {
            await this.$store.dispatch('fetchGroups');
            await this.$store.dispatch('fetchUser', this.$store.state.auth.user.id);
        },
        methods: {
            createGroup() {
                let fd = new FormData();
                fd.append("name", this.groupName);

                axios.post(backendUrl() + "api/admin/group/create", fd, {
                    headers: authHeader()
                }).then(async res => {
                    await this.$store.dispatch('fetchGroups');
                }).catch(err => {
                    console.log(err.response);
                });
            },
            getGroupNames(users) {
                let names = '', usersLength = users.length;
                if (usersLength > 5) {
                    usersLength = 5
                }
                for (let i = 0; i < usersLength; i++) {
                    names = names + users[i].username + ', ';
                }
                return names;
            }
        }
    }
</script>

<style scoped>
    @import '../../assets/css/admin-group.css';
</style>
