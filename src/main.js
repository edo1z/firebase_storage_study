import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { mapState } from 'vuex'

Vue.config.productionTip = false
new Vue({
  store,
  beforeCreate () {
    store.dispatch('auth/init', this)
  },
  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  },
  watch: {
    user: function () {
      store.dispatch('files/init', this.user)
    }
  },
  render: h => h(App)
}).$mount('#app')
