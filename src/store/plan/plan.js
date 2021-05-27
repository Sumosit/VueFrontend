import backendUrl from "../backendUrl";
import authHeader from "../../services/auth-header";

export const plan = {
    state: {
        groups: [],
        plans: [],
        planIds: [],
        planProgress: 0,
        planIdToUpdate: 0,
        planListTick: 0
    },
    actions: {
        async fetchPlansByUserId(ctx, userId) {
            await fetch(backendUrl() + 'api/user/plans/all/'+userId,
                {
                    headers: authHeader()
                })
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {
                        const plans = json;
                        ctx.commit('updatePlans', plans);
                        return plans;
                    }, 1000)
                });
        },
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
        updatePlanIds(state, payload) {
            state.plans.push(payload);
        },
        updatePlanProgress(state, payload) {
            state.planProgress = payload;
        },
        updatePlanIdToUpdate(state, payload) {
            state.planIdToUpdate += payload;
        },
        updatePlanListTick(state, payload) {
            state.planListTick += payload;
        }
    },
    getters: {
        getGroups(state) {
            return state.groups;
        },
        getPlans(state) {
            return state.plans;
        },
        getPlanIds(state) {
            return state.plans;
        },
        getPlanProgress(state) {
            return state.planProgress;
        },
        getPlanIdToUpdate(state) {
            return state.planIdToUpdate;
        },
        getPlanListTick(state) {
            return state.planListTick;
        }
    }
};
