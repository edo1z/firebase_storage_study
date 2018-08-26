import { auth } from '../../api/firebase'
export default {
  namespaced: true,
  state: {
    user: null
  },
  mutations: {
    setUser: (state, user) => {
     state.user = user
    }
  },
  actions: {
    init ({ commit }) {
      auth().onAuthStateChanged(user => commit('setUser', user))
    },
    signIn () {
      let provider = new auth.GoogleAuthProvider()
      auth().signInWithPopup(provider)
      .then(() => console.log('log in success'))
      .catch(err => console.log(err.code, err.messag))
    },
    signOut () {
      auth().signOut()
      .then(() => console.log('log out success'))
      .catch((err) => console.log(err))
    }
  }
}
