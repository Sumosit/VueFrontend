import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import News from './views/News'
import WebsocketNews from "./components/WebsocketNews";
import AdminBoard from "./views/AdminBoard";
import AdminWebsocketNews from "./components/AdminWebsocketNews";
import BoardModerator from "./views/BoardModerator";
import TestModerator from "./views/TestModerator";
import UserBoard from "./views/UserBoard";
import UserSalaries from "./views/UserSalaries";
import UserStorage from "./views/UserStorage";
import Profile from "./views/Profile";
import PersonalData from "./components/PersonalData";
import QualificationDocuments from "./components/QualificationDocuments";
import AcademicDegree from "./components/qualification_components/AcademicDegree";
import AcademicTitle from "./components/qualification_components/AcademicTitle";
import Education from "./components/qualification_components/Education";
import Training from "./components/qualification_components/Training";
import HRI from "./views/HRI";
import Workers from "./components/Workers";
import Chat from "./components/Chat";
import ChatWith from "./components/ChatWith";
import Lessons from "./components/Lessons/Lessons";

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/chat',
          component: Chat,
        },
        {
          path: '/login',
          component: Login
        },
        {
          path: '/register',
          component: Register
        },
        {
          path: '/news',
          component: News,
          children: [
            {
              path: '/',
              component: WebsocketNews,
            },
          ]
        },
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      // lazy-loaded
      component: AdminBoard,
      children: [
        {
          path: '/admin/salaries/give',
          component: () => import('./views/AdminGiveSalaries.vue'),
        },
        {
          path: '/admin/news',
          component: AdminWebsocketNews,
        },
      ]
    },
    {
      path: '/mod',
      name: 'moderator',
      // lazy-loaded
      component: BoardModerator,
      children: [
        {
          path: '/moderator/test',
          component: TestModerator,
        }
      ]
    },
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: UserBoard,
      children: [
        {
          path: '/user/salaries',
          component: UserSalaries,
        },
        {
          path: '/user/storage',
          component: UserStorage
        },
        {
          path: '/user/profile',
          component: Profile
        },
        {
          path: '/user/personal-data',
          component: PersonalData
        },
        {
          path: '/user/qualification-documents',
          component: QualificationDocuments,
          children: [
            {
              path: '/user/qualification-documents/academic-degree',
              component: AcademicDegree,
            },
            {
              path: '/user/qualification-documents/academic-title',
              component: AcademicTitle,
            },
            {
              path: '/user/qualification/education',
              component: Education,
            },
            {
              path: '/user/qualification/training',
              component: Training,
            },
          ]
        },
        {
          path: '/user/hri',
          component: () => HRI
        },
        {
          path: '/user/workers',
          component: Workers
        },
        {
          path: '/user/chat',
          component: Chat,
        },
        {
          path: '/user/chat/:chatId/:recipientId',
          component: Chat,
        },
        {
          path: '/user/chat/with/:chatId/:recipientId',
          component: ChatWith
        },
        {
          path: '/user/lessons',
          component: Lessons
        }
      ]
    }
  ]
});
