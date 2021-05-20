<template>
    <div>
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
                                            :user="user"/>
                                </div>
                            </div>
                            <div v-if="groupsButton">
                                <div class="content-center">Groups</div>
                                <div v-for="(group, index) in getGroupsFilter()"
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
    import AdminSelectedUser from "../Task/AdminSelectedUser";

    export default {
        name: "AdminSelectedField",
        props: ['open'],
        components: {
            AdminSelectedUser,
        },
        data() {
            return {
                usersButton: true,
                groupsButton: false,
                selectedGroups: [],
                selected: [],
                qq: [],
                search: '',
                usersId: []
            }
        },
        async mounted() {
            await this.$store.dispatch("fetchUsers");
            await this.$store.dispatch("fetchGroups");
        },
        updated() {
            this.emitToParent();
            this.emitSelectedGroups();
            this.emitQQ();
        },
        methods: {
            emitOpenToParent(event) {
                this.$emit('childOpenToParent', this.open);
            },
            emitToParent(event) {
                this.$emit('childToParent', this.selected);
            },
            emitSelectedGroups(event) {
                this.$emit('groupsToParent', this.selectedGroups);
            },
            emitQQ(event) {
                this.$emit('qqToParent', this.qq);
            },
            arrayUnique(arr) {
                return arr.filter((e, i, a) => a.indexOf(e) === i)
            },
            getUsersFilter() {
                let users = this.$store.getters.getUsers;
                return users.filter(c => this.getUsernameNameSurname(c.username, c.name, c.surname).toLowerCase().indexOf(this.search) > -1);
            },
            getGroupsFilter() {
                let groups = this.$store.getters.getGroups;
                return groups.filter(c => c.name.toLowerCase().indexOf(this.search) > -1);
            },
            getUsernameNameSurname(username, name, surname) {
                return username + name + surname;
            },
            addToSelected(user_id) {
                if (this.selected.find((user) => user.id === user_id.id)) {
                    this.selected.splice(this.selected.indexOf(user_id), 1)
                } else {
                    this.selected.push(user_id);
                }
            },
            addToSelectedGroups(group_id) {
                let exist = false;
                for (let i = 0; i < this.selectedGroups.length; i++) {
                    for (let j = 0; j < group_id.users.length; j++) {
                        console.log(this.selectedGroups[i] + "?" + group_id.users[j].id);
                        if (this.selectedGroups[i] === group_id.users[j].id) {
                            this.selectedGroups.splice(this.selectedGroups.indexOf(group_id.users[j].id), 1);
                            exist = true;
                        }
                    }
                }
                if (!exist) {
                    for (let i = 0; i < group_id.users.length; i++) {
                        this.selectedGroups.push(group_id.users[i].id);
                    }
                }
                if (this.qq.find(group => group.id === group_id.id)) {
                    this.qq.splice(this.qq.indexOf(group_id), 1);
                } else {
                    this.qq.push(group_id);
                }
            },
        }
    }
</script>

<style scoped>

</style>
