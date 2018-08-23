import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import config from '../firebase.config'

//firebase init
firebase.initializeApp(config)
const db = firebase.firestore()
db.settings({timestampsInSnapshots: true})
const storage = firebase.storage()

Vue.config.productionTip = false
Vue.prototype.$db = db
Vue.prototype.$storage = storage

new Vue({
  render: h => h(App)
}).$mount('#app')
