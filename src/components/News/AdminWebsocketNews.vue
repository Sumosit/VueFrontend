<template>
    <div class="admin-news">
        <form class="name-surname"
              style="padding: 8px; background: #f6f6f6;
color: black">
            <div>
                <label for="title">Title</label>
                <input
                        style="width: 300px"
                        id="title"
                        placeholder="Title"
                        type="text"
                        v-model="send_title"
                >
            </div>
            <div>
                <label for="content">Content</label>
                <textarea
                        style="width: 700px; height: 200px"
                        id="content"
                        placeholder="Content"
                        v-model="send_content"
                ></textarea>
            </div>
            <button
                    @click.prevent="send"
                    id="send"
                    type="submit"
            >Send
            </button>
        </form>
    </div>
</template>

<script>
    import SockJS from "sockjs-client";
    import Stomp from "webstomp-client";
    import backendUrl from "../../store/backendUrl";
    import getTimestampDate from "../../js/getTimestampDate";

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
                if (this.stompClient && this.stompClient.connected) {
                    const msg = {
                        authorId: this.$store.state.auth.user.id,
                        title: this.send_title,
                        content: this.send_content,
                        date: getTimestampDate()
                    };
                    // console.log(JSON.stringify(msg));
                    this.stompClient.send("/app/news", JSON.stringify(msg), {});
                }
            },
            connect() {
                this.socket = new SockJS(backendUrl() + "gs-guide-websocket");
                this.stompClient = Stomp.over(this.socket);
                this.stompClient.debug = () => {
                };
                this.stompClient.connect(
                    {},
                    frame => {
                        this.connected = true;
                        // console.log(frame);
                        this.stompClient.subscribe("/topic/news", tick => {
                            // console.log(tick);
                            this.received_messages.unshift(JSON.parse(tick.body));
                        });
                    },
                    error => {
                        // console.log(error);
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
    @import '../../assets/css/admin-tasks.css';
</style>
