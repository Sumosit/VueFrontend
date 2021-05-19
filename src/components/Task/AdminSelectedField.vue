<template>
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

</template>

<script>
    export default {
        name: "AdminSelectedField",
        data() {
            return {
                usersButton: true,
                groupsButton: false,
                selectedGroups: [],
                selected: [],
                search: '',
            }
        },
        async mounted() {
            await this.$store.dispatch("fetchUsers");
            await this.$store.dispatch("fetchGroups");
        },
        methods: {
            getUsersFilter() {
                let users = this.$store.getters.getUsers;
                return users.filter(c => this.getUsernameNameSurname(c.username, c.name, c.surname).toLowerCase().indexOf(this.search) > -1);
            },
            addToSelected(user_id) {
                if (this.selected.find((user) => user.id === user_id.id)) {
                    this.selected.splice(this.selected.indexOf(user_id), 1)
                } else {
                    this.selected.push(user_id);
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
        }
    }
</script>

<style scoped>

</style>
