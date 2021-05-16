<template>
    <div>
        <div
                class="container"
                id="main-content"
        >
            <div class="row">
                <div class="col-md-6">
                    <form class="form-inline">
                        <div class="form-group">
                            <label for="connect">WebSocket connection:</label>
                            <button
                                    :disabled="connected === true"
                                    @click.prevent="connect"
                                    class="btn btn-default"
                                    id="connect"
                                    type="submit"
                            >Connect
                            </button>
                            <button
                                    :disabled="connected === false"
                                    @click.prevent="disconnect"
                                    class="btn btn-default"
                                    id="disconnect"
                                    type="submit"
                            >Disconnect
                            </button>
                        </div>
                    </form>
                </div>
                <div class="col-md-6">
                    <form class="form-inline">
                        <div class="form-group">
                            <label for="name">What is your name?</label>
                            <input
                                    class="form-control"
                                    id="name"
                                    placeholder="Your name here..."
                                    type="text"
                                    v-model="send_message"
                            >
                        </div>
                        <button
                                @click.prevent="send"
                                class="btn btn-default"
                                id="send"
                                type="submit"
                        >Send
                        </button>
                    </form>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <table
                            class="table table-striped"
                            id="conversation"
                    >
                        <thead>
                        <tr>
                            <th>Greetings</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                                :key="item"
                                v-for="item in received_messages"
                        >
                            <td>{{ item }}</td>
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
                send_message: null,
                connected: false
            };
        },
        methods: {
            send() {
                console.log("Send message:" + this.send_message);
                if (this.stompClient && this.stompClient.connected) {
                    const msg = {name: this.send_message};
                    console.log(JSON.stringify(msg));
                    this.stompClient.send("/app/hello/1", JSON.stringify(msg), {});
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
                        this.stompClient.subscribe("/topic/greetings/1", tick => {
                            console.log(tick);
                            this.received_messages.push(JSON.parse(tick.body).content);
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
