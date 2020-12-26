import AuthService from '../services/auth.service';
import backendUrl from "./backendUrl";
import authHeader from "../services/auth-header";

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
    ? {status: {loggedIn: true}, user}
    : {status: {loggedIn: false}, user: null};

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({commit}, user) {
      return AuthService.login(user).then(
          user => {
            commit('loginSuccess', user);
            return Promise.resolve(user);
          },
          error => {
            commit('loginFailure');
            return Promise.reject(error);
          }
      );
    },
    logout({commit}) {
      AuthService.logout();
      commit('logout');
    },
    register({commit}, user) {
      return AuthService.register(user).then(
          response => {
            commit('registerSuccess');
            return Promise.resolve(response.data);
          },
          error => {
            commit('registerFailure');
            return Promise.reject(error);
          }
      );
    },
    async fetchUserSalaries(ctx, userId) {
      await fetch(backendUrl() + 'user/salaries/'+userId,
          {
            headers: authHeader()
          })
          .then(response => response.json())
          .then(json => {
            setTimeout(() => {
              const userSalaries = json;
              ctx.commit('updateUserSalaries', userSalaries);
            }, 1000)
          });
    }
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.user = false;
    },
    updateUserSalaries(state, userSalaries) {
      state.user.salaries = userSalaries;
    }
  },
  getters: {
    getLoggedIn(state) {
      return state.status.loggedIn;
    }
  }
};