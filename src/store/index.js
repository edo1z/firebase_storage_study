import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import files from './modules/files'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    auth,
    files
  }
})
export default store
