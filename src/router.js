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
import HRI from "./views/HRI";
import Workers from "./components/Workers";
import Chat from "./components/Chat";
import ChatWith from "./components/ChatWith";
import Calendar from "./components/Calendar/Calendar";
import Month from "./components/Calendar/Month";
import Day from "./components/Calendar/Day";
import Years from "./components/Calendar/Years";
import Memory from "./components/Memory/Memory"
import Profile from "./views/Profile";
import ProfileInfo from "./views/ProfileInfo";
import ProfileSettings from "./views/ProfileSettings";
import AdminTasks from "./components/Task/AdminTasks"
import Tasks from "./components/Task/Tasks"
import Salary from "./components/Salary/Salary";

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
        {
          path: '/admin/tasks',
          component: AdminTasks
        }
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
      component: UserBoard,
      children: [
        {
          path: 'salary',
          component: Salary,
        },
        {
          path: 'tasks',
          component: Tasks,
        },
        {
          path: 'memory/:memoryId',
          component: Memory
        },
        {
          path: '/user/storage',
          component: UserStorage
        },
        {
          path: '/user/profile',
          component: Profile,
          children: [
            {
              path: '/user/profile/settings',
              component: ProfileSettings
            },
            {
              path: '/user/profile/info',
              component: ProfileInfo
            }
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
          path:'/user/calendar',
          component: Calendar,
          children: [
            {
              path: '/user/calendar/:year',
              component: Years,
            },
            {
              path:'/user/calendar/:year/:month',
              component: Month,
            },
            {
              path:'/user/calendar/:year/:month/:day',
              component: Day,
            },
          ]
        }
      ]
    }
  ]
});
