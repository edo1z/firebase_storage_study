import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'
import config from '../firebase.config'

//firebase init
firebase.initializeApp(config)
const db = firebase.firestore()
db.settings({timestampsInSnapshots: true})
const storage = firebase.storage()
const auth = firebase.auth

Vue.config.productionTip = false
Vue.prototype.$db = db
Vue.prototype.$storage = storage
Vue.prototype.$auth = auth

new Vue({
  render: h => h(App)
}).$mount('#app')
