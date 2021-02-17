<template>
  <div>
    <div class="mf-history">
      <div v-for="(item, index) in received_messages">
        <div
          v-if="item.userId!==$store.state.auth.user.id"
             class="recipient wrapper-chat-with-rec">
          <div class="rec-pi-avatar">
            <img v-if="recipient.fileDB"
                 :src="backendUrl + 'files/' + recipient.fileDB.id">
            <img v-else src="../assets/images/user.svg">
          </div>
          <div class="message-rec">
            <span>{{ item.content }}</span>
          </div>
        </div>
        <div v-if="item.userId===$store.state.auth.user.id"
          :class="{'sender wrapper-chat-with-sen': changeView === false,
          'recipient wrapper-chat-with-rec': changeView === true}">
          <div v-if="changeView === false"
            class="message-sen">
            <span>{{ item.content }}</span>
          </div>
          <div
            :class="{'sen-pi-avatar': changeView === false,
            'rec-pi-avatar': changeView === true}">
            <img v-if="$store.state.auth.user.fileDB"
                 :src="backendUrl + 'files/' + $store.state.auth.user.fileDB.id">
            <img v-else src="../assets/images/user.svg">
          </div>
          <div v-if="changeView === true"
               class="message-rec">
            <span>{{ item.content }}</span>
          </div>
        </div>
      </div>
    </div>

    <form class="form-mf-message">
      <div class="mf-message">
        <label class="label-text">
            <input
            type="text"
            id="name"
            class="form-control"
            v-model="send_message"
            placeholder="Your message"
          >
        </label>
        <label class="label-send"
          for="send">
          <button
            id="send"
            class="btn btn-default"
            type="submit"
            @click.prevent="send"
          >
          </button>
        </label>
      </div>
    </form>
  </div>
</template>

<script>
  import SockJS from "sockjs-client";
  import Stomp from "webstomp-client";
  import backendUrl from "../store/backendUrl";
  import axios from "axios";
  import authHeader from "../services/auth-header";

  export default {
    data() {
      return {
        received_messages: [],
        send_message: null,
        connected: false,
        backendUrl: '',
        recipient: null,
        chat: []
      };
    },
    props: ['changeView'],
    methods: {
      send() {
        console.log("Send message:" + this.send_message);
        if (this.stompClient && this.stompClient.connected) {
          const msg = {
            message: this.send_message,
            chatId: this.$route.params.chatId,
            userId: this.$store.state.auth.user.id
          };
          console.log(JSON.stringify(msg));
          this.stompClient.send("/app/chat/" + this.chatId, JSON.stringify(msg), {});
        }
      },
      connect() {
        this.chatId = this.$route.params.chatId;
        this.socket = new SockJS(backendUrl() + "gs-guide-websocket");
        this.stompClient = Stomp.over(this.socket);

        this.stompClient.connect(
            {},
            frame => {
              this.connected = true;
              console.log(frame);
              this.stompClient.subscribe("/topic/chat/" + this.chatId, tick => {
                console.log(tick);
                let message = JSON.parse(tick.body);
                this.received_messages.push(message);
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
      }
    },
    async mounted() {
      this.connect();
      this.backendUrl = backendUrl();
      const recData = await axios.get(backendUrl() + 'api/user/one/' + this.$route.params.recipientId,
          {headers: authHeader()});
      this.recipient = recData.data;
      console.log(this.recipient);
    }
  };</script>

<style scoped>
  @import '../assets/css/chat-with.css';
</style>
