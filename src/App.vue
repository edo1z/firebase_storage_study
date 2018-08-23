<template>
  <div id="app">
    <div id="menu">
      <h1>firebase storage study</h1>
    </div>
    <div class="container">
      <div class="left">
        <div id="profile"></div>
        <Dropbox/>
      </div>
      <div class="middle">
        <div id="imageList"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Dropbox from './components/Dropbox.vue'

export default {
  components: {Dropbox},
  name: 'app'
}
</script>

<style>
html, body {
  margin : 0;
}
#menu {
  background : green;
  color      : white;
  padding    : 10px 5px;
  margin     : 0;
}
#menu h1 {
  font-size : 16px;
  padding   : 0;
  margin    : 0;
}
.container {
  padding : 10px;
}
</style>
