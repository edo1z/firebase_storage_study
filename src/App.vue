<template>
  <div id="app">
    <div id="menu">
      <h1>firebase storage study</h1>
    </div>
    <div class="container">
      <div class="left">
        <div id="profile"></div>
        <div id="dropbox">please drop your image files!</div>
      </div>
      <div class="middle">
        <div id="imageList"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  padding: 10px;
}
#dropbox {
  padding: 10px;
  width: 100px;
  height: 100px;
  background:orange;
}
</style>
