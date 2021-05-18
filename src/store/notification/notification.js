import backendUrl from "../backendUrl";
import authHeader from "../../services/auth-header";

export const notification = {
    state: {
        notification: [],
        alarms: []
    },
    actions: {
        async fetchNotification(ctx, userId) {
            await fetch(backendUrl() + 'api/user/notification/all/' + userId,
                {
                    headers: authHeader()
                })
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {
                        const notification = json;
                        // console.log(notification);
                        ctx.commit('updateNotification', notification);
                        return notification;
                    }, 1000)
                });
        },
    },
    mutations: {
        updateNotification(state, payload) {
            state.notification = payload;
        },
        pushNotification(state, payload) {
            state.notification.push(payload);
        },
        updateAlarms(state, payload) {
            state.alarms = payload;
        },
        pushAlarms(state, payload) {
            state.alarms.push(payload);
        }
    },
    getters: {
        getNotification(state) {
            return state.notification;
        },
        getAlarms(state) {
            return state.alarms;
        }
    }
};
