<template>
  <div>
    <div class="c-btn-search-field">
      <input class="c-btn-search" type="text" v-model="search">
      <img v-on:click="changeView = !changeView"
        src="../assets/images/change-chatWith.png">
    </div>
    <div class="c-wrapper">
      <div class="c-id2-list">
        <div v-for="(chat, index) in getChat"
             :key="index"
        v-on:click="setUrlParameters(chat.id, chat.recipientId.id)">
          <div class="c-profile-image">
            <div class="c-pi-avatar" >
              <img v-if="chat.recipientId.fileDB"
                   :src="backendUrl + 'files/' + chat.recipientId.fileDB.id">
              <img v-else src="../assets/images/user.svg">
            </div>
            <div class="pi-info">
              <div class="c-profile-info">
                <span class="username">{{chat.recipientId.username}}</span>
                <span class="email">{{chat.recipientId.email}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="c-message-field">
        <ChatWith v-if="openChat"
        :change-view="changeView"/>
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
        openChat: false,
        changeView: false
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
