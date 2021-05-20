import backendUrl from "../backendUrl";
import authHeader from "../../services/auth-header";

export const plan = {
    state: {
        groups: [],
        plans: []
    },
    actions: {
        async fetchPlans(ctx) {
            await fetch(backendUrl() + 'api/user/plans/all',
                {
                    headers: authHeader()
                })
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {
                        const plans = json;
                        // console.log(salaries);
                        ctx.commit('updatePlans', plans);
                        return plans;
                    }, 1000)
                });
        },
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
        updatePlans(state, payload) {
            state.plans = payload;
        },
    },
    getters: {
        getGroups(state) {
            return state.groups;
        },
        getPlans(state) {
            return state.plans;
        }
    }
};
