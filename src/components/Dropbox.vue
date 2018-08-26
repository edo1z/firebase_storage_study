<template>
  <div
    id="dropbox"
    @dragleave.prevent
    @dragover.prevent
    @drop.stop.prevent="drop"
  >
    please drop your image files!
  </div>
</template>

<script>
export default {
  name: 'Dropbox',
  data: () => ({
    file_types: ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'],
    user: null
  }),
  methods: {
    drop (e) {
      this.user = this.$auth().currentUser
      if(! this.user) return alert('Please sign in.')
      let file = e.dataTransfer.files[0]
      if (this.file_types.indexOf(file.type) < 0) return
      let upload = this.$storage.ref('/').child(file.name).put(file)
      upload.on('state_changed',
        null,
        err => console.log(err),
        () => {
          upload.snapshot.ref.getDownloadURL()
          .then(url => this.saveFileToDb(file, url))
        }
      )
    },
    saveFileToDb (file, url) {
      this.$db.collection('files').doc(file.name).set({
        name: file.name,
        type: file.type,
        size: file.size,
        url: url,
        userId: this.user.uid
      })
    }
  }
}
</script>

<style>
#dropbox {
  padding    : 10px;
  width      : 100px;
  height     : 100px;
  background : orange;
}
</style>
