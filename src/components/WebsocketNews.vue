<template>
  <div class="news-all">
    <div class="news"
         v-for="(item, index) in $store.getters.allNews"
         :key="index">
      <div class="news-title-field">
        <div class="news-title-author-avatar">
          <img :src="backendUrl+'files/'+item.author.fileDB.id">
        </div>
        <div class="news-title">
          {{item.title}}
<!--          <p>by Mikhail Sabyanin - Tuesday, 15 December 2020, 3:26 PM</p>-->
          <p>by {{item.author.username}}, {{item.date}}</p>
        </div>
      </div>
      <div class="news-content-field">
        <p style="white-space: pre-line" v-html="item.content"></p>
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
    created() {
      document.title = "News";
    },
    data() {
      return {
        received_messages: [],
        send_title: null,
        send_content: null,
        connected: false,
        backendUrl: backendUrl()
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
              this.stompClient.subscribe("/topic/news", async tick => {
                console.log(tick);
                // this.received_messages.unshift(JSON.parse(tick.body));
                await this.$store.dispatch("fetchNews");
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
      await this.$store.dispatch("fetchNews");
      console.log(this.$store.getters.allNews);
      this.received_messages = this.$store.getters.allNews;
    }
  };
</script>

<style scoped>
  @import '../assets/css/news.css';
</style>
