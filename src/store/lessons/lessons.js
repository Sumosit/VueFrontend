import backendUrl from "../backendUrl";
import authHeader from "../../services/auth-header";

export const lessons = {
  state: {
    lessons: [],
    lessonTasks: [],
    currentTask: Object
  },
  actions: {
    async fetchLessons(ctx, user_id) {
      await fetch(backendUrl() + 'api/user/lessons/' + user_id,
          {
            headers: authHeader()
          })
          .then(response => response.json())
          .then(json => {
            setTimeout(() => {
              const lessons = json;
              console.log(lessons);
              ctx.commit('updateLessons', lessons);
              return lessons;
            }, 1000)
          });
    },
    async fetchLessonTasks(ctx, user_id, lesson_id) {
      await fetch(backendUrl() + 'api/user/lessons/tasks/' + user_id + '/' + 6,
          {
            headers: authHeader()
          })
          .then(response => response.json())
          .then(json => {
            setTimeout(() => {
              const lessonTasks = json;
              console.log(lessonTasks);
              ctx.commit('updateLessonTasks', lessonTasks);
              return lessonTasks;
            }, 1000)
          });
    },
    async fetchLessonTask(ctx, payload) {
      await fetch(backendUrl() + 'api/user/lessons/tasks/'+payload.userId+'/'+payload.lessonId+'/'+payload.taskId,
          {
            headers: authHeader()
          })
          .then(async response => await response.json())
          .then(json => {
            setTimeout(() => {
              const currentTask = json;
              console.log(currentTask);
              ctx.commit('updateCurrentTask', currentTask);
              return currentTask;
            }, 1000)
          });
    },
  },
  mutations: {
    updateLessons(state, payload) {
      state.lessons = payload;
    },
    updateLessonTasks(state, payload) {
      state.lessonTasks = payload;
    },
    updateCurrentTask(state, payload) {
      state.currentTask = payload;
    }
  },
  getters: {
    getLessons(state) {
      return state.lessons;
    },
    getLessonTasks(state) {
      return state.lessonTasks;
    },
    getCurrentTask(state) {
      return state.currentTask;
    }
  }
};
