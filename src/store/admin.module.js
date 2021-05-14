import backendUrl from "../store/backendUrl";
import authHeader from "../services/auth-header";

export const admin = {
  state: {
    users: []
  },
  actions: {
    async fetchUsers(ctx) {
      await fetch(backendUrl() + 'api/admin/users/all',
          {
            headers: authHeader()
          })
          .then(response => response.json())
          .then(json => {
            setTimeout(() => {
              const users = json;
              // console.log(users);
              ctx.commit('updateUsers', users);
              return users;
            }, 1000)
          });
    },
  },
  mutations: {
    updateUsers(state, payload) {
      state.users = payload;
    }
  },
  getters: {
    getUsers(state) {
      return state.users;
    }
  }
};
