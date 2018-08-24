<template>
  <table id="filelist">
    <tr v-if="files">
      <th>file name</th>
      <th>file size</th>
      <th>file type</th>
      <th></th>
    </tr>
    <tr v-for="file in files" :key="file.name">
     <td>{{ file.name }}</td>
     <td>{{ file.size }}</td>
     <td>{{ file.type }}</td>
     <td>Delete</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'Filelist',
  data: () => ({
    files: []
  }),
  created: function() {
    let vm = this
    this.$db.collection('files').onSnapshot(function(snap) {
      snap.docChanges().forEach(function (change) {
        switch (change.type) {
          case 'added':
            vm.files.push(change.doc.data())
        }
      })
    })
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
