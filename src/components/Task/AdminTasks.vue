<template>
  <div>
    <div class="admin-tasks">
      <div class="a-t">
        <input class="a-t-title"
               placeholder="Task title"
               v-model="title"
               type="text">
        <label class="a-t-date"> Deadline
          <input class="dm-date" v-model="date" placeholder="yyyy-mm-dd" type="text" maxlength="10" alt="yyyy-mm-dd">
          <input class="dm-time" v-model="time" placeholder="hh:mm:ss" type="text" maxlength="8" alt="hh:mm:dd">
        </label>
      </div>
      <div class="a-t">
        <label>
          <textarea class="a-t-description"
                    placeholder="Description"
                    v-model="description"
                    type="text"></textarea>
        </label>
      </div>

      <input id="files" ref="files" type="file" multiple @change="handleFileUploads"/>
      <label class="a-t-description" for="files"></label>
      <div>
        <span class="a-t-users-count">Selected users count: {{selected.length}}</span>
        <button @click="sendTasks()">Upload</button>
      </div>
    </div>
    <div v-show="!open"
         v-on:click="open = !open">
      <div class="admin-users-open content-center">
        <img src="../../assets/images/iconmonstr-plus-2.svg"/>
      </div>
    </div>
    <div v-show="open">
      <div>
        <div class="admin-users">
          <div class="a-u-interface">
            <div
              v-on:click="open = !open"
              class="content-center a-u-i-btn">
              <img src="../../assets/images/iconmonstr-minus-2.svg"/>
            </div>
          </div>
          <div class="a-u-search-field content-center">
            <input type="text" v-model="search" placeholder="search user">
          </div>
          <div class="a-u-user-list-field">
            <div class="a-u-user-list">
              <div v-for="(user, index) in getUsersFilter()"
                   v-on:click="addToSelected(user)">
                <AdminSelectedUser
                  v-if="user.id !== $store.state.auth.user.id"
                  :user="user"/>
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
  import getTimestampDate from "../../js/getTimestampDate";

  export default {
    name: "AdminTasks",
    created() {
      document.title = "Admin Tasks";
    },
    components: {
      AdminSelectedUser
    },
    data() {
      return {
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
    mounted() {
      this.$store.dispatch("fetchUsers");
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
      sendTasks() {
        let fd = new FormData();
        let usersId = [];
        for (var i = 0; i < this.selected.length; i++) {
          usersId.push(this.selected[i].id);
          console.log(this.selected[i].id);
        }
        for (var i = 0; i < this.files.length; i++) {
          let file = this.files[i];
          fd.append('files', file);
          console.log(file)
        }
        fd.append("title", this.title);
        fd.append("description", this.description);
        fd.append("sendDate", getTimestampDate());
        fd.append("deadline", this.date + ' ' + this.time);
        fd.append("userId", this.$store.state.auth.user.id);
        fd.append("usersId", usersId);
        // console.log(this.selected);
        console.log(fd);
        axios.post(backendUrl() + 'api/admin/task/save', fd, {
          headers:
              authHeader(),
          'Content-Type': 'multipart/form-data'
        }).then(async res => {
          // await this.$store.dispatch("fetchMemory", {
          //   userId: this.$store.state.auth.user.id,
          //   memoryId: this.memoryId
          // });
          console.log(res);
        }).catch(err => {
          console.log(err.response);
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
