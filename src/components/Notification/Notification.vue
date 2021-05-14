<template>
  <div class="notification-field">
    <div>
      <a :href="not.linkToChat" target="_blank"
         v-for="(not, index) in sortedNotifications" class="not-wrapper">
        <div class="not-avatar content-center">
          <img v-if="not.fromUser.fileDB"
               :src="backendUrl + 'files/' + not.fromUser.fileDB.id">
          <img v-else src="../../assets/images/user.svg">
        </div>
        <div class="not-info">
          <div class="not-type">{{not.type.slice(0, 18)}}</div>
          <div class="not-message">{{not.message.slice(0, 18)}}</div>
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
  import juntos from '../../assets/audio/Zvuk_urona_v_Maynkraft_(ringon.site).mp3';

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
              this.stompClient.subscribe("/topic/notification/" + this.$store.state.auth.user.id,
                  async tick => {
                    console.log(tick);
                    let message = JSON.parse(tick.body);
                    this.received_messages.push(message);
                    this.$store.commit('pushNotification', message);
                    this.notificationLength = this.received_messages.length;
                    this.emitToParent();
                    var audio = new Audio(juntos);
                    audio.volume = 0.2;
                    audio.play();
                    if (message.type.includes("New task")) {
                      await this.$store.dispatch("fetchTasksBiUserId", this.$store.state.auth.user.id);
                    }
                    if (message.type.includes("New salary")) {
                      await this.$store.dispatch("fetchSalaries", this.$store.state.auth.user.id);
                    }
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
    },
    computed: {
      sortedNotifications: function () {
        function compare(a, b) {
          if (a.id > b.id)
            return -1;
          if (a.id < b.id)
            return 1;
          return 0;
        }

        return this.$store.getters.getNotification.sort(compare);
      }
    }
  }
</script>

<style scoped>
  @import '../../assets/css/notification.css';
</style>
