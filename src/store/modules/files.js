import Vue from 'vue'
import { storage, db } from '../../api/firebase'
export default {
  namespaced: true,
  state: {
    fileList: {},
    snapshot: null
  },
  mutations: {
    emptyFileList: (state) => {
      state.fileList = {}
    },
    updateFileList: (state, file) => {
      Vue.set(state.fileList, file.name, file)
    },
    deleteFileList: (state, file) => {
      Vue.delete(state.fileList, file.name)
    },
    stopSnapshot: (state) => {
      if(state.snapshot) state.snapshot()
      state.snapshot = null
    },
    setSnapshot: (state, snapshot) => {
     state.snapshot = snapshot
    }
  },
  actions: {
    init: ({ commit }, user) => {
      commit('emptyFileList')
      commit('stopSnapshot')
      if (! user) return
      const snapshot = db.collection('files')
      .where('userId', '==', user.uid)
      .onSnapshot(snap => {
        snap.docChanges().forEach(change => {
          switch (change.type) {
            case 'added':
            case 'modified':
              commit('updateFileList', change.doc.data())
              break
            case 'removed':
              commit('deleteFileList', change.doc.data())
              break
          }
        })
      })
      commit('setSnapshot', snapshot)
    },
    upload: ({ dispatch }, data) => {
      let upload = storage.ref('/' + data.user.uid).child(data.file.name).put(data.file)
      upload.on('state_changed', null, err => console.log(err),
        () => {
          upload.snapshot.ref.getDownloadURL()
          .then(url => dispatch('addToDb', {url: url, user: data.user, file: data.file}))
        }
      )
    },
    addToDb: (context, data) => {
      const id = data.user.uid + ':' + data.file.name
      db.collection('files').doc(id).set({
        name: data.file.name,
        type: data.file.type,
        size: data.file.size,
        url: data.url,
        userId: data.user.uid
      })
    },
    delete: (context, data) => {
      if (! data.user) return
      const id = data.user.uid + ':' + data.fileName
      storage.ref('/' + data.user.uid).child(data.fileName).delete()
      .then(() => db.collection('files').doc(id).delete())
      .catch(err => console.log(err))
    }
  }
}
