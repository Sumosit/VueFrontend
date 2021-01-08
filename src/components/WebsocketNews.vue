<template>
  <div>
    <div
      id="main-content"
      class="container"
    >
      <div class="row">
        <div class="col-md-6">
          <form class="form-inline">
            <div class="form-group">
              <label for="connect">WebSocket connection:</label>
              <button
                id="connect"
                class="btn btn-default"
                type="submit"
                :disabled="connected === true"
                @click.prevent="connect"
              >Connect</button>
              <button
                id="disconnect"
                class="btn btn-default"
                type="submit"
                :disabled="connected === false"
                @click.prevent="disconnect"
              >Disconnect
              </button>
            </div>
          </form>
        </div>
        <div class="col-md-6">
          <form class="form-inline">
            <div class="form-group">
              <label for="title">Title</label>
              <input
                type="text"
                id="title"
                class="form-control"
                v-model="send_title"
                placeholder="Title"
              >
              <label for="content">Content</label>
              <input
                type="text"
                id="content"
                class="form-control"
                v-model="send_content"
                placeholder="Content"
              >
            </div>
            <button
              id="send"
              class="btn btn-default"
              type="submit"
              @click.prevent="send"
            >Send</button>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <table
            id="conversation"
            class="table table-striped"
          >
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
    send() {
      console.log("Send message:" + this.send_title);
      if (this.stompClient && this.stompClient.connected) {
        const msg = { title: this.send_title,
                      content: this.send_content };
        console.log(JSON.stringify(msg));
        this.stompClient.send("/app/news", JSON.stringify(msg), {});
      }
    },
    connect() {

      this.socket = new SockJS(backendUrl()+"gs-guide-websocket");
      this.stompClient = Stomp.over(this.socket);

      this.stompClient.connect(
          {},
          frame => {
          this.connected = true;
          console.log(frame);
          this.stompClient.subscribe("/topic/news", tick => {
            console.log(tick);
            this.received_messages.push(JSON.parse(tick.body));
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
    // this.connect();
  }
};
</script>

<style scoped>
</style>