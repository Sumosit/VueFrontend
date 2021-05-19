import Vue from 'vue';
import Vuex from 'vuex';

import {auth} from './auth.module';
import {admin} from './admin.module';
import {user} from './user.module';
import {memories} from './memory/memories'
import {calendar} from './calendar/calendar'
import {tasks} from './tasks/tasks'
import {notification} from './notification/notification'
import {salary} from './salary/salary'
import {chat} from './chat/chat'
import {plan} from './plan/plan'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        admin,
        user,
        memories,
        calendar,
        tasks,
        notification,
        salary,
        chat,
        plan
    }
});
