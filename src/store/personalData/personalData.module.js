import backendUrl from "../backendUrl";
import authHeader from "../../services/auth-header";
import axios from 'axios';

export const personalData = {
  state: {
    personalData: Object
  },
  actions: {
    async fetchPersonalData(ctx, user_id) {
      await fetch(backendUrl() + 'api/user/personal-data/' + user_id,
          {
            headers: authHeader()
          })
          .then(response => response.json())
          .then(json => {
            setTimeout(() => {
              const personalData = json;
              console.log(personalData);
              ctx.commit('updatePersonalData', personalData);
              return personalData;
            }, 1000)
          });
    },
  },
  mutations: {
    updatePersonalData(state, payload) {
      state.personalData = payload;
    }
  },
  getters: {
    getPersonalData(state) {
      return state.personalData;
    }
  }
};
