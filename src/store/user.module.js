import backendUrl from "./backendUrl";
import authHeader from "../services/auth-header";

export const user = {
  state: {
    storageFiles: []
  },
  actions: {
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
    allStorageFiles(state) {
      return state.storageFiles;
    }
  }
};