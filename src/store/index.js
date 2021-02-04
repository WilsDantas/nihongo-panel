import Vue from 'vue'
import Vuex from 'vuex'

import { state, mutations } from './default'

import auth from './modules/auth'
import categories from './modules/categories'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        auth,
        categories
    },
    state,
    mutations,
})

export default store