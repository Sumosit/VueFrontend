<template>
  <div>
    <div class="btn-search-field">
      <input class="btn-search" type="text" v-model="search">
    </div>
    <div class="wrapper">
      <div class="id2-list">
        <div v-for="(chat, index) in getChat"
             :key="index"
        v-on:click="setUrlParameters(chat.id, chat.recipientId.id)">
          <div class="profile-image">
            <div class="pi-avatar" >
              <img v-if="chat.recipientId.fileDB"
                   :src="backendUrl + 'files/' + chat.recipientId.fileDB.id">
              <img v-else src="../assets/images/user.svg">
            </div>
            <div class="pi-info">
              <div class="profile-info">
                <span class="username">{{chat.recipientId.username}}</span>
                <span class="email">{{chat.recipientId.email}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="message-field">
        <ChatWith v-if="openChat"/>
      </div>
    </div>
  </div>
</template>

<script>
  import backendUrl from "../store/backendUrl";
  import ChatWith from "../components/ChatWith";
  import {router} from "../router";
  import axios from "axios";

  export default {
    name: "Chat",
    components: {
      ChatWith
    },
    mounted() {
      if (this.$route.params.chatId) {
        this.openChat = true;
      }
      this.$store.dispatch('fetchChat');
      this.backendUrl = backendUrl();
    },
    data() {
      return {
        search: '',
        backendUrl: '',
        openChat: false
      }
    },
    methods: {
      setUrlParameters(chat_id, recipientId) {
        this.openChat = false;
        router.push("/user/chat/" + chat_id+'/'+recipientId);
        this.$nextTick(() => {
          this.openChat = true;
        });
      },
    },
    computed: {
      getChat() {
        return this.$store.getters.allChat;
      }
    }
  }
</script>

<style scoped>
  @import '../assets/css/chat.css';
</style>