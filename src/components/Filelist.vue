<template>
  <table id="filelist">
    <tr v-if="files">
      <th></th>
      <th>file name</th>
      <th>file size</th>
      <th>file type</th>
      <th></th>
    </tr>
    <tr v-for="file in files" :key="file.name">
     <td><img :src="file.url" style="max-width:150px;"/></td>
     <td>{{ file.name }}</td>
     <td>{{ file.size }}</td>
     <td>{{ file.type }}</td>
      <td>
        <a
          href=""
          @click.prevent.stop="deleteFile"
          :data-name="file.name"
        >
          Delete
        </a>
      </td>
    </tr>
  </table>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Filelist',
  computed: {
    ...mapState({
      files: state => state.files.fileList,
      user: state => state.auth.user
    })
  },
  methods: {
    deleteFile (e) {
      let fileName = e.target.dataset.name
      this.$store.dispatch('files/delete', { fileName: fileName, user: this.user })
    }
  }
}
</script>

<style>
table {
  margin: 15px 0;
}
td {
  font-size: 14px;
  border: 1px solid #999;
  padding: 3px;
  margin:0;
}
</style>
