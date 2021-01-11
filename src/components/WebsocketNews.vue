<template>
  <div>
    <div class="news"
         v-for="item in received_messages"
         :key="item">
      <div class="news-title-field">
        <div class="news-title-author-avatar">
          <img :src="item.authorAvatar">
        </div>
        <div class="news-title">
          {{item.title}}
<!--          <p>by Mikhail Sabyanin - Tuesday, 15 December 2020, 3:26 PM</p>-->
          <p>by {{item.authorUsername}}, {{item.date}}</p>
        </div>
      </div>
      <div class="news-content-field">
        {{item.content}}
      </div>
    </div>
  </div>
</template>

<script>
  import SockJS from "sockjs-client";
  import Stomp from "webstomp-client";
  import backendUrl from "../store/backendUrl";

  export default {
    name: "websocketdemo",
    data() {
      return {
        received_messages: [],
        send_title: null,
        send_content: null,
        connected: false
      };
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
              this.stompClient.subscribe("/topic/news", tick => {
                console.log(tick);
                this.received_messages.unshift(JSON.parse(tick.body));
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
    mounted() {
      this.connect();
      this.$store.dispatch("fetchNews");
      this.received_messages = this.$store.getters.allNews;
    }
  };
</script>

<style scoped>
  @import '../assets/css/news.css';
</style>