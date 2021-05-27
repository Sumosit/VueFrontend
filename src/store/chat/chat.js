import backendUrl from "../backendUrl";
import authHeader from "../../services/auth-header";

export const chat = {
    state: {
        chat_messages: [],
        chatTick: 0
    },
    actions: {
        async fetchChatMessagesByChatId(ctx, chatId) {
            await fetch(backendUrl() + 'api/chat/messages/' + chatId,
                {
                    headers: authHeader()
                })
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {
                        const chat_messages = json;
                        // console.log(tasks);
                        ctx.commit('updateChatMessages', chat_messages);
                        return chat_messages;
                    }, 1000)
                });
        }
    },
    mutations: {
        updateChatMessages(state, payload) {
            state.chat_messages = payload;
        },
        updateChatTick(state, payload) {
            state.chatTick += payload;
        }
    },
    getters: {
        getChatMessages(state) {
            return state.chat_messages;
        },
        getChatTick(state) {
            return state.chatTick;
        }
    }
};
