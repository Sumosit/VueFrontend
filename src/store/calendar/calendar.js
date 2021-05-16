import backendUrl from "../backendUrl";
import authHeader from "../../services/auth-header";

export const calendar = {
    state: {
        notes: [],
        weekends: false,
        existNotes: []
    },
    actions: {
        async fetchNotesByDate(ctx, note) {
            await fetch(backendUrl() + 'api/user/notes/' + note.userId + "/" + note.year + "/" + note.month + "/" + note.day,
                {
                    headers: authHeader()
                })
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {
                        const notes = json;
                        ctx.commit('updateNotes', notes);
                        console.log(notes);
                        return notes;
                    }, 1000)
                });
        },
        async fetchExistNotesByDate(ctx, userId) {
            await fetch(backendUrl() + 'api/user/notes/exists/' + userId,
                {
                    headers: authHeader()
                })
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {
                        ctx.commit('updateExistNotes', json);
                        return json;
                    }, 1000)
                });
        },
    },
    mutations: {
        updateNotes(state, payload) {
            state.notes = payload;
        },
        updateWeekends(state, payload) {
            state.weekends = payload
        },
        updateExistNotes(state, payload) {
            state.existNotes = payload;
        }
    },
    getters: {
        getNotes(state) {
            return state.notes;
        },
        getWeekends(state) {
            return state.weekends;
        },
        getExistNotes(state) {
            return state.existNotes;
        }
    }
};
