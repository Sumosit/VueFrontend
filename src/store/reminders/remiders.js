import backendUrl from "../backendUrl";
import authHeader from "../../services/auth-header";

export const lessons = {
  state: {

  },
  actions: {
    async fetchReminders(ctx, date) {
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
    }
  },
  mutations: {
  },
  getters: {
  }
};
