<template>
  <div>
    <div class="admin-tasks">
      <label class="a-t-title">
        <input
          placeholder="Money"
          v-model="salary"
          type="number">
      </label>
      <label class="a-t-title">
        <input
          placeholder="Money"
          v-model="debt"
          type="number">
      </label>
      <label class="a-t-title">
        <input
          placeholder="Money"
          v-model="hours"
          type="number">
      </label>
      <label class="a-t-title">
        <input
          placeholder="Money"
          v-model="days"
          type="number">
      </label>
      <label class="a-t-title">
        <input
          placeholder="Money"
          v-model="month"
          type="text">
      </label>
      <div class="a-t-users-count">
        <span class="">Selected users count: {{selected.length}}</span>
        <button @click="sendSalaries()">Send salary</button>
      </div>
      {{opv}}
      {{vosms}}
      {{total_nalog}}
      {{ipn}}
      {{withheld}}
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
  import SockJS from "sockjs-client";
  import Stomp from "webstomp-client";
  import getMonths from "../../js/getMonths";
  import getMonth from "../../js/getMonth";

  export default {
    name: "AdminSalary",
    components: {
      AdminSelectedUser
    },
    data() {
      return {
        selected: [],
        selectedLength: 0,
        search: '',
        open: true,
        salary: 233000,
        opv: 0,
        oneMzp: 42500,
        vosms: 0,
        total_nalog: 0,
        ipn: 0,
        withheld: 0,
        debt: 0,
        days: 18,
        hours: 144,
        month: new Date().getDate() + " " + getMonth(5).name
      }
    },
    created() {
      document.title = "Admin salary";
    },
    mounted() {
      this.$store.dispatch("fetchUsers");
      this.connect();
    },
    watch: {
      salary: function () {
        this.opv = (this.salary * 10) / 100;
        this.vosms = (this.salary * 2) / 100;
        this.total_nalog = this.opv + this.vosms + this.oneMzp;
        this.ipn = ((this.salary - this.total_nalog) * 10) / 100;
        this.withheld = this.opv + this.vosms + this.ipn;
        this.month = new Date().getDate() + " " + getMonth(5).name;
      }
    },
    methods: {
      connect() {
        this.chatId = this.$route.params.chatId;
        this.socket = new SockJS(backendUrl() + "gs-guide-websocket");
        this.stompClient = Stomp.over(this.socket);

        this.stompClient.connect(
            {},
            frame => {
              this.connected = true;
              console.log(frame);
              this.stompClient.subscribe("/topic/salary/" + this.$store.state.auth.user.id, tick => {
                console.log(tick);;
              });
            },
            error => {
              console.log(error);
              this.connected = false;
            }
        );
      },
      disconnect() {
        if (this.stompClient) {
          this.stompClient.disconnect();
        }
        this.connected = false;
      },
      tickleConnection() {
        this.connected ? this.disconnect() : this.connect();
      },
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
      sendSalaries() {
        let fd = new FormData();
        let usersId = [];
        for (var i = 0; i < this.selected.length; i++) {
          usersId.push(this.selected[i].id);
        }
        fd.append("period", getTimestampDate());
        fd.append("days", this.days);
        fd.append("hours", this.hours);
        fd.append("month", this.month);
        fd.append("salary", this.salary);
        fd.append("opv", this.opv);
        fd.append("oneMzp", this.oneMzp);
        fd.append("vosms", this.vosms);
        fd.append("totalNalog", this.total_nalog);
        fd.append("ipn", this.ipn);
        fd.append("withheld", this.withheld);
        fd.append("debt", this.debt);
        fd.append("userId", this.$store.state.auth.user.id);
        fd.append("usersId", usersId);
        // console.log(this.selected);
        console.log(fd);
        console.log(usersId);
        axios.post(backendUrl() + 'api/admin/salary/save', fd, {
          headers: authHeader()
        }).then(res => {
          for (let i = 0; i < usersId.length; i++) {
            let msg_notification = {
              id: null,
              type: "New salary from ",
              message: this.title,
              linkToChat: "/user/salary",
              fromUserId: this.$store.state.auth.user.id,
              userId: usersId[i]
            };
            console.log(msg_notification);
            this.stompClient.send("/app/notification/" + usersId[i], JSON.stringify(msg_notification), {});
          }
          console.log(res);
        }).catch(err => {
          console.log(err.response);
        });

      }
    }
  }
</script>

<style scoped>
  @import '../../assets/css/admin-tasks.css';
</style>
