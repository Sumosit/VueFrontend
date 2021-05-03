<template>
  <div>
    <div class="c-btn-search-field">
      <input class="c-btn-search" type="text" v-model="search">
      <img v-on:click="changeView = !changeView"
           src="../assets/images/change-chatWith.png">
    </div>
    <div class="c-wrapper">
      <div class="c-id2-list">
        <div v-for="(chat, index) in getChatIdFilter()"
             :class="{'current-chat': $route.params.recipientId && Number.parseInt($route.params.recipientId) !== $store.state.auth.user.id && Number.parseInt($route.params.recipientId) === chat.recipient.id}"
             :key="index"
             v-on:click="setUrlParameters(chat.id, chat.recipient.id)">
          <div class="c-profile-image">
            <div class="c-pi-avatar">
              <img v-if="chat.recipient.fileDB && (chat.recipient.id !== $store.state.auth.user.id)"
                   :src="backendUrl + 'files/' + chat.recipient.fileDB.id">
              <img v-else src="../assets/images/user.svg">
            </div>
            <div class="pi-info">
              <div class="c-profile-info"
                   v-if="chat.recipient.id !== $store.state.auth.user.id">
                <span class="username">{{chat.recipient.username}}</span>
                <span class="email">{{chat.recipient.email}}</span>
              </div>
              <div class="c-profile-info"
                   v-if="chat.sender.id !== $store.state.auth.user.id">
                <span class="username">{{chat.sender.username}}</span>
                <span class="email">{{chat.sender.email}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-center"
           v-show="!loading">
        <LoadingLdsRipple/>
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
    data() {
      return {
        search: '',
        backendUrl: '',
        openChat: false,
        changeView: false,
        loading: false
      }
    },
    created() {
      document.title = "Chat";
    },
    async mounted() {
      if (this.$route.params.chatId) {
        this.openChat = true;
      }
      await this.$store.dispatch('fetchChat');
      this.loading = true;
      this.backendUrl = backendUrl();
    },
    methods: {
      setUrlParameters(chat_id, recipientId) {
        this.openChat = false;
        router.push("/user/chat/" + chat_id + '/' + recipientId);
        this.$nextTick(() => {
          this.openChat = true;
        });
      },
      getChatIdFilter() {
        let chatId = this.sortedChatId;
        return chatId.filter(c => (c.sender.username+c.sender.name+c.sender.surname+c.recipient.username+c.recipient.name+c.recipient.surname).toLowerCase().indexOf(this.search) > -1);
      },
      // getUsernameNameSurname(username, name, surname) {
      //   return username + name + surname;
      // },
    },
    computed: {
      getChat() {
        return this.$store.getters.allChat;
      },
      sortedChatId: function () {
        function compare(a, b) {
          if (a.lastId > b.lastId)
            return -1;
          if (a.lastId < b.lastId)
            return 1;
          return 0;
        }
        return this.$store.getters.allChat.sort(compare);
      },
    }
  }
</script>

<style scoped>
  @import '../assets/css/chat.css';
</style>
