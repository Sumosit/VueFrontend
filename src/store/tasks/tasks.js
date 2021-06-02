import backendUrl from "../backendUrl";
import authHeader from "../../services/auth-header";

export const tasks = {
    state: {
        tasks: []
    },
    actions: {
        async fetchTasksBiUserId(ctx, userId) {
            await fetch(backendUrl() + 'api/user/tasks/' + userId,
                {
                    headers: authHeader()
                })
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {
                        const tasks = json;
                        // console.log(tasks);
                        ctx.commit('updateTasks', tasks);
                        return tasks;
                    }, 1000)
                });
        }
    },
    mutations: {
        updateTasks(state, payload) {
            state.tasks = payload;
        },
        unshiftTasks(state, payload) {
            state.tasks.unshift(payload);
        }
    },
    getters: {
        getTasks(state) {
            return state.tasks;
        }
    }
};
