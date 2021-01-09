import backendUrl from "./backendUrl";
import authHeader from "../services/auth-header";

export const user = {
  state: {
    storageFiles: [],
    news: []
  },
  actions: {
    async fetchNews(ctx) {
      await fetch(backendUrl() + 'news',
          {
            headers: authHeader()
          })
          .then(response => response.json())
          .then(json => {
            setTimeout(() => {
              const news = json;
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
      await fetch(backendUrl() + 'user/salaries/'+userId,
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
    allNews(state) {
      return state.news;
    },
    allStorageFiles(state) {
      return state.storageFiles;
    }
  }
};