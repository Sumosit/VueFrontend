import backendUrl from "./backendUrl";
import authHeader from "../services/auth-header";
import axios from 'axios';

export const user = {
  state: {
    storageFiles: [],
    news: [],
    users: [],
    chat: [],
    userExtra: Object,
    user: Object
  },
  actions: {
    async fetchUserExtra(ctx, user_id) {
      await fetch(backendUrl() + 'api/user/userExtra/' + user_id,
          {
            headers: authHeader()
          })
          .then(response => response.json())
          .then(json => {
            setTimeout(() => {
              const userExtra = json;
              console.log(userExtra);
              ctx.commit('updateUserExtra', userExtra);
              return userExtra;
            }, 1000)
          });
    },
    async fetchUser(ctx, user_id) {
      await fetch(backendUrl() + 'api/user/one/' + user_id,
          {
            headers: authHeader()
          })
          .then(response => response.json())
          .then(json => {
            setTimeout(() => {
              const user = json;
              console.log(user);
              ctx.commit('updateUser', user);
              return user;
            }, 1000)
          });
    },
    async fetchChat(ctx) {
      await fetch(backendUrl() + 'api/chat/all/' + this.state.auth.user.id,
          {
            headers: authHeader()
          })
          .then(response => response.json())
          .then(json => {
            setTimeout(() => {
              const chat = json;
              console.log(chat);
              ctx.commit('updateChat', chat);
              return chat;
            }, 1000)
          });
    },
    async fetchUsers(ctx) {
      await fetch(backendUrl() + 'api/test/all/users')
          .then(response => response.json())
          .then(json => {
            setTimeout(() => {
              const users = json;
              ctx.commit('updateUsers', users);
              return users;
            }, 1000)
          });
    },
    async fetchNews(ctx) {
      await fetch(backendUrl() + 'news',
          {
            headers: authHeader()
          })
          .then(response => response.json())
          .then(json => {
            setTimeout(() => {
              const news = json;
              console.log(news);
              ctx.commit('updateNews', news);
            }, 1000)
          });
    },
    async fetchStorageFiles(ctx) {
      await fetch(backendUrl() + 'user/storage',
          {
            headers: authHeader()
          })
          .then(response => response.json())
          .then(json => {
            setTimeout(() => {
              const storageFiles = json;
              ctx.commit('updateStorageFiles', storageFiles);
            }, 1000)
          });
    },
    async fetchUserSalaries(ctx, userId) {
      await fetch(backendUrl() + 'api/user/salaries/' + userId,
          {
            headers: authHeader()
          })
          .then(response => response.json())
          .then(json => {
            setTimeout(() => {
              const userSalaries = json;
              ctx.commit('updateUserSalaries', userSalaries);
            }, 1000)
          });
    }
  },
  mutations: {
    updateUserExtra(state, userExtra) {
      state.userExtra = userExtra;
    },
    updateChat(state, chat) {
      state.chat = chat;
    },
    updateUsers(state, users) {
      state.users = users;
    },
    updateUser(state, user) {
      state.user = user;
    },
    updateNews(state, payload) {
      state.news = payload.reverse();
    },
    updateStorageFiles(state, payload) {
      state.storageFiles = payload;
    },
    updateUserSalaries(state, userSalaries) {
      this.state.auth.user.salaries = userSalaries.slice().sort(function (a, b) {
        return b.id - a.id;
      });
    }
  },
  getters: {
    getUserExtra(state) {
      return state.userExtra;
    },
    getUser(state) {
      return state.user;
    },
    allChat(state) {
      return state.chat;
    },
    allUsers(state) {
      return state.users;
    },
    allNews(state) {
      return state.news;
    },
    allStorageFiles(state) {
      return state.storageFiles;
    }
  }
};
