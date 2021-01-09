<template>
  <div>
    <form class="form-inline">
      <label for="connect">WebSocket connection:</label>
      <button
        id="connect"
        class="btn btn-default"
        type="submit"
        :disabled="connected === true"
        @click.prevent="connect"
      >Connect
      </button>
      <button
        id="disconnect"
        class="btn btn-default"
        type="submit"
        :disabled="connected === false"
        @click.prevent="disconnect"
      >Disconnect
      </button>
    </form>
    <form class="form-inline">
      <label for="title">Title</label>
      <input
        type="text"
        id="title"
        class="form-control"
        v-model="send_title"
        placeholder="Title"
      >
      <label for="content">Content</label>
      <textarea
        id="content"
        class="form-control"
        v-model="send_content"
        placeholder="Content"
      ></textarea>
      <button
        id="send"
        class="btn btn-default"
        type="submit"
        @click.prevent="send"
      >Send
      </button>
    </form>
    <table id="conversation"
           class="table table-striped">
      <thead>
      <tr>
        <th>News</th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="item in received_messages"
        :key="item"
      >
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.content }}</td>
      </tr>
      </tbody>
    </table>
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
      send() {
        console.log("Send message:" + this.send_title);
        if (this.stompClient && this.stompClient.connected) {
          const msg = {
            title: this.send_title,
            content: this.send_content
          };
          console.log(JSON.stringify(msg));
          this.stompClient.send("/app/news", JSON.stringify(msg), {});
        }
      },
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
      this.$store.dispatch("fetchNews")
    }
  };
</script>

<style scoped>
</style>