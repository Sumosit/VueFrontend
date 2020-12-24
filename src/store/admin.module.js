import backendUrl from "../store/backendUrl";

export const admin = {
  state: {
    users: []
  },
  actions: {
    async fetchUsers(ctx) {
      // await fetch('http://localhost:43392/api/test/all/users')
      await fetch(backendUrl()+'api/test/all/users')
          .then(response => response.json())
          .then(json => {
            setTimeout(() => {
              const users = json;
              ctx.commit('updateUsers', users);
              return users;
            }, 1000)
          });
    },
    async sendOneSalary(ctx) {
      let fd = new FormData();
      fd.set()
    }
  },
  mutations: {
    updateUsers(state, users) {
      state.users = users;
    },
  },
  getters: {
    allUsers(state) {
      console.log(state.users);
      return state.users;
    }
  }
};