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
    }

  },
  mutations: {
    updateStorageFiles(state, payload) {
      state.storageFiles = payload;
    },
  },
  getters: {
    allStorageFiles(state) {
      return state.storageFiles;
    }
  }
};