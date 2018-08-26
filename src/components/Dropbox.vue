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
import { mapState } from 'vuex'
export default {
  name: 'Dropbox',
  data: () => ({
    file_types: ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml']
  }),
  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  },
  methods: {
    drop (e) {
      if(! this.user) return alert('Please sign in.')
      let file = e.dataTransfer.files[0]
      if (this.file_types.indexOf(file.type) < 0) return
      this.$store.dispatch('files/upload', { file: file, user: this.user})
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
