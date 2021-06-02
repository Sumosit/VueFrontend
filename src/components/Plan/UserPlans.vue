<template>
    <div>
        <table>
            <thead>
            <tr class="admin-groups-head">
                <th class="group-name">Plans name</th>
                <th>Plans users</th>
            </tr>
            </thead>
            <tbody class="admin-groups-body" name="list" is="transition-group">
            <tr v-for="(plans, index) in $store.getters.getPlans"
            :key="plans.id">
                <router-link :to="'/user/plans-info/'+plans.id" tag="td">{{plans.name}}</router-link>
                <td style="overflow: hidden; height: 35px;">
                    <!--                    <span v-if="plans.users">{{getGroupNames(plans.users)}}</span>-->
                    <!--                    <span v-else>no users</span>-->
                    <span v-if="plans.users.length > 0">{{getUsersNames(plans.users)}}</span>
                    <!--                    <span v-else>, no users</span>-->
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
        name: "UserPlans",
        data() {
            return {
                planName: '',
            }
        },
        created() {
            document.title = "Plans";
        },
        async mounted() {
            await this.$store.dispatch('fetchPlansByUserId', this.$store.state.auth.user.id);
        },
        methods: {
            // createPlan() {
            //     let fd = new FormData();
            //     fd.append("name", this.planName);
            //
            //     axios.post(backendUrl() + "api/admin/plans/create", fd, {
            //         headers: authHeader()
            //     }).then(async res => {
            //         await this.$store.dispatch('fetchPlansByUserId', this.$store.state.auth.user.id);
            //     }).catch(err => {
            //         console.log(err.response);
            //     });
            // },
            getUsersNames(users) {
                let names = '', usersLength = users.length;
                if (usersLength > 3) {
                    usersLength = 3
                }
                for (let i = 0; i < usersLength; i++) {
                    names = names + users[i].username + ', ';
                }
                return names;
            },
            getGroupNames(groups) {
                let groupsNames = '', groupsLength = groups.length;
                if (groupsLength > 3) {
                    groupsLength = 3
                }
                for (let i = 0; i < groupsLength; i++) {
                    groupsNames = groupsNames + users[i].username + ', ';
                }
                return groupsNames;
            }
        }
    }
</script>

<style scoped>
    @import '../../assets/css/admin-group.css';
    @import '../../assets/css/calendar-interface.css';
</style>
