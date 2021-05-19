<template>
    <div class="admin-plan">
        <div>
            
        </div>
        <table>
            <thead>
            <tr class="admin-groups-head">
                <th class="group-name">Group name</th>
                <th>Group users</th>
            </tr>
            </thead>
            <tbody class="admin-groups-body">
            <tr v-for="(group, index) in $store.getters.getGroupsByUserId">
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
    export default {
        name: "UserGroups",
        data() {
            return {
                groups: []
            }
        },
        created() {
            document.title = "User | Groups";
        },
        async mounted() {
            this.groups = await this.$store.dispatch('fetchGroupsByUserId', this.$route.params.userId);
        },
        methods: {
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
