import backendUrl from "../backendUrl";
import authHeader from "../../services/auth-header";

export const lessons = {
  state: {
    lessons: []
  },
  actions: {
    async fetchLessons(ctx, user_id) {
      await fetch(backendUrl() + 'api/user/lessons/' + user_id,
          {
            headers: authHeader()
          })
          .then(response => response.json())
          .then(json => {
            setTimeout(() => {
              const lessons = json;
              console.log(lessons);
              ctx.commit('updateLessons', lessons);
              return lessons;
            }, 1000)
          });
    },
  },
  mutations: {
    updateLessons(state, payload) {
      state.lessons = payload;
    }
  },
  getters: {
    getLessons(state) {
      return state.lessons;
    }
  }
};
