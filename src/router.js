import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: '/chat',
          component: () => import('./components/WebsocketGreetings'),
        },
      ]
    },
    {
      path: '/news',
      component: () => import('./views/News'),
      children: [
        {
          path: '/',
          component: () => import('./components/WebsocketNews'),
        },
      ]
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
      path: '/profile',
      name: 'profile',
      // lazy-loaded
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      // lazy-loaded
      component: () => import('./views/AdminBoard.vue'),
      children: [
        {
          path: '/admin/test',
          component: () => import('./views/AdminTest.vue'),
        },
        {
          path: '/admin/salaries/give',
          component: () => import('./views/AdminGiveSalaries.vue'),
        },
        {
          path: '/admin/news',
          component: () => import('./components/AdminWebsocketNews'),
        },
      ]
    },
    {
      path: '/mod',
      name: 'moderator',
      // lazy-loaded
      component: () => import('./views/BoardModerator.vue'),
      children: [
        {
          path: '/moderator/test',
          component: () => import('./views/TestModerator.vue'),
        }
      ]
    },
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('./views/UserBoard.vue'),
      children: [
        {
          path: '/user/test',
          component: () => import('./views/UserTest.vue'),
        },
        {
          path: '/user/salaries',
          component: () => import('./views/UserSalaries.vue'),
        },
        {
          path: '/user/storage',
          component: () => import('./views/UserStorage.vue')
        },
      ]
    }
  ]
});