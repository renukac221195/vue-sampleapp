import Vue from 'vue'
import Vuex from 'vuex'
import {
  loadUser
} from './modules/LoginPage'
import {
  loadAllUsersUpdates
} from './modules/Feeds'
import {
  loadDoubleClickedFeed
} from './modules/OneFeed'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loadUser,
    loadAllUsersUpdates,
    loadDoubleClickedFeed
  }
})
