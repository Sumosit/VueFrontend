import Vue from 'vue';
import Vuex from 'vuex';

import { auth } from './auth.module';
import { admin } from './admin.module';
import { user } from './user.module';
import { personalData } from './personalData/personalData.module';
import { qualification } from './qualification';
import { memories } from './Memory/memories'
import { calendar } from './calendar/calendar'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    admin,
    user,
    personalData,
    qualification,
    memories,
    calendar
  }
});
