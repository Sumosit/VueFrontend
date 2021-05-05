<template>
  <div class="notification-field">
    <div>
      <a :href="not.linkToChat" target="_blank"
         v-for="(not, index) in $store.getters.getNotification" class="not-wrapper">
        <div class="not-avatar content-center">
          <img v-if="not.fromUser.fileDB"
               :src="backendUrl + 'files/' + chat.recipient.fileDB.id">
          <img v-else src="../../assets/images/user.svg">
        </div>
        <div class="not-info">
          <div class="not-type">{{not.type.slice(0, 18)}}...</div>
          <div class="not-message">{{not.message.slice(0, 18)}}...</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  import SockJS from "sockjs-client";
  import Stomp from "webstomp-client";
  import backendUrl from "../../store/backendUrl";
  import axios from "axios";
  import authHeader from "../../services/auth-header";

  export default {
    name: "Notification",
    props: ['notificationLength'],
    data() {
      return {
        received_messages: [],
        backendUrl: backendUrl()
      }
    },
    async mounted() {
      this.connect();
      await this.$store.dispatch('fetchNotification', this.$store.state.auth.user.id)
          .then(() => {
            this.received_messages = this.$store.getters.getNotification;
            this.notificationLength = this.$store.getters.getNotification.length;
            this.emitToParent();
          });
    },
    methods: {
      connect() {
        this.socket = new SockJS(backendUrl() + "gs-guide-websocket");
        this.stompClient = Stomp.over(this.socket);

        this.stompClient.connect(
            {},
            frame => {
              this.connected = true;
              console.log(frame);
              this.stompClient.subscribe("/topic/notification/" + this.$store.state.auth.user.id, tick => {
                console.log(tick);
                let message = JSON.parse(tick.body);
                this.received_messages.push(message);
                this.$store.commit('pushNotification', message);
                this.notificationLength = this.received_messages.length;
                this.emitToParent();
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
      emitToParent() {
        this.$emit('childToParent', this.$store.getters.getNotification.length);
      },
    }
  }
</script>

<style scoped>
  @import '../../assets/css/notification.css';
</style>
