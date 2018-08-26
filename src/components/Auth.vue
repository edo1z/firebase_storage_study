<template>
  <div id="auth">
    <template v-if="user">
      <div>
        <img :src="user.photoURL" class="profileImg"/>
        <p>{{ user.displayName }}</p>
      </div>
      <button  @click.prevent="sighOut">Sign Out</button>
    </template>
    <button v-else @click.prevent="signIn">Sign in</button>
  </div>
</template>

<script>
export default {
  name: 'Auth',
  data: () => ({
    user: null
  }),
  created () {
    this.$auth().onAuthStateChanged(user => this.user = user)
  },
  methods: {
    signIn () {
      let provider = new this.$auth.GoogleAuthProvider()
      this.$auth().signInWithPopup(provider)
      .then(() => console.log('loggedIn'))
      .catch(err => console.log(err.code, err.message))
    },
    sighOut () {
      this.$auth().signOut().then(() => {
        this.user = null
      }).catch((err) => console.log(err))
    }
  }
}
</script>

<style>
#auth {
  margin:20px 0;
}
#auth button {
  height:30px;
  width:100px;
  background:#09c;
  color:#fff;
  font-weight:bold;
}
.profileImg {
  width: 50px;
  height: 50px;
}
</style>
