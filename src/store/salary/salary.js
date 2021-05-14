import backendUrl from "../backendUrl";
import authHeader from "../../services/auth-header";

export const salary = {
  state: {
    salaries: []
  },
  actions: {
    async fetchSalaries(ctx, userId) {
      await fetch(backendUrl() + 'api/user/salary/all/' + userId,
          {
            headers: authHeader()
          })
          .then(response => response.json())
          .then(json => {
            setTimeout(() => {
              const salaries = json;
              console.log(salaries);
              ctx.commit('updateSalaries', salaries);
              return salaries;
            }, 1000)
          });
    },
  },
  mutations: {
    updateSalaries(state, payload) {
      state.salaries = payload;
    },
  },
  getters: {
    getSalaries(state) {
      return state.salaries;
    }
  }
};
