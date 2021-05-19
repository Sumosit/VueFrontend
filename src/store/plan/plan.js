import backendUrl from "../backendUrl";
import authHeader from "../../services/auth-header";

export const plan = {
    state: {
        groups: []
    },
    actions: {
        async fetchGroups(ctx) {
            await fetch(backendUrl() + 'api/user/group/all',
                {
                    headers: authHeader()
                })
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {
                        const groups = json;
                        // console.log(salaries);
                        ctx.commit('updateGroups', groups);
                        return groups;
                    }, 1000)
                });
        },
    },
    mutations: {
        updateGroups(state, payload) {
            state.groups = payload;
        },
    },
    getters: {
        getGroups(state) {
            return state.groups;
        }
    }
};
