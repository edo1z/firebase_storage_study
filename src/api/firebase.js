import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'
import config from '../../firebase.config'

firebase.initializeApp(config)
export const db = firebase.firestore()
db.settings({timestampsInSnapshots: true})
export const storage = firebase.storage()
export const auth = firebase.auth
