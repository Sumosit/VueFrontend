import backendUrl from "../store/backendUrl";
import authHeader from "../services/auth-header";

export const qualification = {
  state: {
    education: [],
    training: []
  },
  actions: {
    async fetchEducation(ctx, user_id) {
      await fetch(backendUrl() + 'api/user/education/' + user_id,
          {
            headers: authHeader()
          })
          .then(response => response.json())
          .then(json => {
            setTimeout(() => {
              const education = json;
              console.log(education);
              ctx.commit('updateEducation', education);
              return education;
            }, 1000)
          });
    },
    async fetchTraining(ctx, user_id) {
      await fetch(backendUrl() + 'api/user/training/' + user_id,
          {
            headers: authHeader()
          })
          .then(response => response.json())
          .then(json => {
            setTimeout(() => {
              const training = json;
              console.log(training);
              ctx.commit('updateTraining', training);
              return training;
            }, 1000)
          });
    },
  },
  mutations: {
    updateEducation(state, payload) {
      state.education = payload;
    },
    updateTraining(state, payload) {
      state.training = payload;
    }
  },
  getters: {
    getEducation(state) {
      return state.education;
    },
    getTraining(state) {
      return state.training;
    }
  }
};
