<template>
  <div id="app">
    <Menu />
    <div class="container">
      <div class="left">
        <Auth />
        <Dropbox/>
      </div>
      <div class="middle">
       <Filelist />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Auth from './components/Auth.vue'
import Dropbox from './components/Dropbox.vue'
import Filelist from './components/Filelist.vue'

export default {
  components: {Menu, Auth, Dropbox, Filelist},
  name: 'app'
}
</script>

<style>
html, body {
  margin : 0;
}
.container {
  padding : 10px;
}
</style>
