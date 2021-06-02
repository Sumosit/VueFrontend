<template>
    <div class="salary">
        <div class="name-surname">
            <div>
                <label>Plan name:</label>
                <input type="text" v-if="isAdmin" v-model="plan.name"/>
                <span v-else-if="!isAdmin">{{plan.name}}</span>
            </div>
            <div class="name-surname-btn" v-if="isAdmin">
                <button v-on:click="savePlanName">Save name</button>
            </div>
        </div>
        <div class="name-surname-btn" v-if="isAdmin">
            <button v-on:click="editMode = !editMode">Enable/Disable admin mode</button>
        </div>
        <div class="progress-barr">
            <progressBar
                    :label="`yes`"
                    :percentage="plan.completed"
                    :key="plan.completed"
            ></progressBar>
        </div>
        <div>
            <PlanList :editMode="editMode"
                      :planId="$route.params.planId"
                      class="plan-list"/>
        </div>
        <div v-if="isAdmin">
            <button class="clearfix content-center" v-on:click="open = !open">Add users</button>
            <div style="margin-top: 5px">Selected users count: {{selected.length + selectedGroups.length}}</div>
            <button class="clearfix content-center" v-if="selected.length > 0 || qq.length > 0"
                    v-on:click="saveUsersAndGroups">Save users
            </button>
        </div>
        <span class="content-center font-size20" v-if="plan.users.length > 0">Users</span>
        <div v-if="plan.users.length <= 0">
            <span class="clearfix content-center">No users</span>
        </div>
        <table v-if="plan.users.length > 0">
            <thead>
            <tr class="admin-groups-head">
                <th class="table-name-surname">Username</th>
                <th class="table-name-surname">Name</th>
                <th class="table-name-surname">Surname</th>
                <th>Profession</th>
                <th class="width25"></th>
            </tr>
            </thead>
            <tbody :key="index"
                   class="admin-groups-body"
                   v-for="(user, index) in plan.users">
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
                             v-on:click="deleteUserFromPlan(user.id)">
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
        <span class="content-center font-size20 margin-top5px" v-if="plan.groups.length > 0">Groups</span>
        <div v-if="plan.groups.length <= 0">
            <span class="clearfix content-center">No groups</span>
        </div>
        <ul v-if="plan.groups.length > 0">
            <li class="li-style-dot display-flex" v-for="(group, index) in plan.groups">

                <div>
                    <img class="cursor-pointer width25 margin-left5px height-auto clearfix"
                         src="../../assets/images/icons8-delete.svg"
                         v-on:click="deleteGroupFromPlan(group.id)">
                </div>
                <router-link :to="'/user/group-info/'+group.id" class="cursor-pointer content-center"
                             tag="div">
                    {{group.name}}
                </router-link>
            </li>
            <!--            </router-link>-->
        </ul>
        <AdminSelectedField :open="open"
                            v-on:childOpenToParent="onChildOpenClick"
                            v-on:childToParent="onChildClick"
                            v-on:groupsToParent="onChildSelectedGroupsClick"
                            v-on:qqToParent="onChildQQClick"/>
    </div>
</template>

<script>
    import backendUrl from "../../store/backendUrl";
    import axios from "axios";
    import authHeader from "../../services/auth-header";
    import SockJS from "sockjs-client";
    import Stomp from "webstomp-client";
    import AdminSelectedField from "../Task/AdminSelectedField";
    import PlanList from "../Plan/PlanList";
    import PlanListInfo from "../Plan/PlanListInfo";
    import progressBar from "../Plan/progressBar";

    export default {
        name: "PlansInfo",
        components: {
            AdminSelectedField,
            PlanList,
            PlanListInfo,
            progressBar
        },
        data() {
            return {
                selectedGroups: [],
                selected: [],
                qq: [],
                search: '',
                plan: Object,
                open: false,
                editMode: false,
                'style-progress': {}
            }
        },
        created() {
            document.title = 'Plans info';
        },
        async mounted() {
            await this.getPlan();
            await this.$store.dispatch('fetchUser', this.$store.state.auth.user.id);
            await this.$store.dispatch('fetchUsers');
            await this.connectToWebSocketPlans();
        },
        methods: {
            connectToWebSocketPlans() {
                this.socket = new SockJS(backendUrl() + "gs-guide-websocket");
                this.stompClient = Stomp.over(this.socket);
                this.stompClient.debug = () => {
                };

                this.stompClient.connect(
                    {},
                    frame => {
                        // console.log(frame);
                        this.stompClient.subscribe("/topic/plans/" + this.$route.params.planId,
                            async tick => {
                                if (JSON.parse(tick.body) === 2) {
                                    this.$store.commit('updatePlanListTick', 1);
                                }
                                if (JSON.parse(tick.body) === 1) {
                                    this.$store.commit('updatePlanIdToUpdate', 1);
                                }
                                await this.getPlan();
                            });
                    },
                    error => {
                        console.log(error);
                    }
                );
            },
            async onChangeStatusClick(value) {
                await this.getPlan();
                this.$store.commit('updatePlanListTick', 1);
                this.sendToWebSocketPlans();
                this.$emit('CellToLife', 1);
            },
            sendToWebSocketPlans() {
                if (this.stompClient && this.stompClient.connected) {
                    this.stompClient.send("/app/plans/" + this.$route.params.planId,
                        JSON.stringify(this.$store.getters.getPlanIdToUpdate), {});
                }
            },
            onChildOpenClick(value) {
                this.open = value
            },
            onChildQQClick(value) {
                this.qq = value
            },
            onChildClick(value) {
                this.selected = value
            },
            onChildSelectedGroupsClick(value) {
                this.selectedGroups = value
            },
            arrayUnique(arr) {
                return arr.filter((e, i, a) => a.indexOf(e) === i)
            },
            async getPlan() {
                this.plan = (await axios.get(backendUrl() + 'api/user/plans/one/' + this.$route.params.planId,
                    {
                        headers: authHeader()
                    })).data;
            },
            deleteUserFromPlan(userId) {
                let fd = new FormData();
                fd.append("planId", this.plan.id);
                fd.append("userId", userId);
                axios.post(backendUrl() + "api/admin/plans/delete/user", fd, {
                    headers: authHeader()
                }).then(async res => {
                    this.getPlan();
                }).catch(err => {
                    console.log(err.response);
                });
            },
            deleteGroupFromPlan(groupId) {
                let fd = new FormData();
                fd.append("planId", this.plan.id);
                fd.append("groupId", groupId);
                axios.post(backendUrl() + "api/admin/plans/delete/group", fd, {
                    headers: authHeader()
                }).then(async res => {
                    this.getPlan();
                }).catch(err => {
                    console.log(err.response);
                });
            },
            savePlanName() {
                let fd = new FormData();
                fd.append("planId", this.plan.id);
                fd.append("name", this.plan.name);
                axios.post(backendUrl() + "api/admin/plans/change/name", fd, {
                    headers: authHeader()
                }).then(async res => {
                    this.getPlan();
                }).catch(err => {
                    console.log(err.response);
                });
            },
            saveUsersAndGroups() {
                let fd = new FormData();
                let usersId = [], groupsId = [];
                for (var i = 0; i < this.selected.length; i++) {
                    usersId.push(this.selected[i].id);
                }
                for (var i = 0; i < this.selectedGroups.length; i++) {
                    usersId.push(this.selectedGroups[i]);
                }
                for (var i = 0; i < this.qq.length; i++) {
                    groupsId.push(this.qq[i].id);
                }
                fd.append('plansId', this.$route.params.planId);
                fd.append('usersId', usersId);
                fd.append('groupsId', groupsId);

                axios.post(backendUrl() + 'api/admin/plans/add/users/groups', fd, {
                    headers: authHeader()
                }).then(res => {
                    this.getPlan();
                }).catch(err => {
                    console.log(err.response);
                });
            },
        },
        computed: {
            isAdmin() {
                if (this.$store.state.auth.status.loggedIn) {
                    return this.$store.state.auth.user.roles.includes('ROLE_ADMIN')
                }
            },
        },
    }
</script>

<style scoped>
    @import '../../assets/css/plan-list.css';
</style>
