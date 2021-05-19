<template>
    <div>
        <div :class="{'user-click': hover}"
             class="a-u-user"
             v-if="user"
             v-on:click="hover = !hover">
            {{user.id}}.
            <span v-if="!user.name || !user.surname">{{user.username}}</span>
            <span v-else>{{user.name}} {{user.surname}}</span>
        </div>
        <div :class="{'user-click': hover}"
             class="a-u-user"
             v-if="group"
             v-on:click="hover = !hover">
            {{group.id}}.
            <span>{{group.name}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AdminSelectedUser",
        props: ['user', 'group'],
        data() {
            return {
                hover: false
            }
        }
    }
</script>

<style scoped>
    @import '../../assets/css/admin-tasks.css';

    div {
        display: inline-flex;
    }

    .a-u-user {
        cursor: pointer;
        width: 100%;
        padding: 2.5px 5px;

        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        user-select: none;
    }

    .a-u-user:hover {
        background: #f6f6f6;
    }
</style>

