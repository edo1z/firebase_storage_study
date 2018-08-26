<template>
  <div id="auth">
    <template v-if="user">
      <div>
        <img :src="user.photoURL" class="profileImg"/>
        <p>{{ user.displayName }}</p>
      </div>
      <button  @click.prevent="signOut">Sign Out</button>
    </template>
    <button v-else @click.prevent="signIn">Sign in</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Auth',
  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  },
  methods: {
    ...mapActions({
      signIn: 'auth/signIn',
      signOut: 'auth/signOut'
    })
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
