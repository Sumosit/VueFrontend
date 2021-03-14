import backendUrl from "../backendUrl";
import authHeader from "../../services/auth-header";

export const lessons = {
  state: {
    months: [
      {id: 1, name: 'January'},
      {id: 2, name: 'February'},
      {id: 3, name: 'March'},
      {id: 4, name: 'April'},
      {id: 5, name: 'May'},
      {id: 6, name: 'June'},
      {id: 7, name: 'July'},
      {id: 8, name: 'August'},
      {id: 9, name: 'September'},
      {id: 10, name: 'October'},
      {id: 11, name: 'November'},
      {id: 12, name: 'December'}]
  },
  actions: {},
  mutations: {},
  getters: {
    getMonth(state, id) {
      return state.months[id];
    }
  }
};
