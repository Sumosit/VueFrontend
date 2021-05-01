import backendUrl from "../backendUrl";
import authHeader from "../../services/auth-header";

export const memories = {
  state: {
    memory: Object,
    mainMemory: Object
  },
  actions: {
    async fetchMemory(ctx, payload) {
      await fetch(backendUrl() + 'api/user/memory/getOne/' + payload.userId+'/'+payload.memoryId,
          {
            headers: authHeader()
          })
          .then(response => response.json())
          .then(json => {
            setTimeout(() => {
              const memory = json;
              console.log(memory);
              ctx.commit('updateMemory', memory);
              return memory;
            }, 1000)
          });
    },
    async fetchMainMemory(ctx, userId) {
      await fetch(backendUrl() + 'api/user/memory/getMain/' + userId,
          {
            headers: authHeader()
          })
          .then(response => response.json())
          .then(json => {
            setTimeout(() => {
              const mainMemory = json;
              console.log(mainMemory);
              ctx.commit('updateMainMemory', mainMemory);
              return mainMemory;
            }, 1000)
          });
    }
  },
  mutations: {
    updateMemory(state, payload) {
      state.memory = payload;
    },
    updateMainMemory(state, payload) {
      state.mainMemory = payload;
    }
  },
  getters: {
    getMemory(state) {
      return state.memory;
    },
    getMainMemory(state) {
      return state.mainMemory;
    }
  }
};
