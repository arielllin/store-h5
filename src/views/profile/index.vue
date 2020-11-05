<template>
  <div class="profile">
    <div class="profile-content">
      <div class="avatar">
        <img :src="userAvatar">
      </div>
      <div class="info">
        {{ `Hi, ${userId}` }}
      </div>

      <div v-if="!loginStatus" class="profile-connect">
        <ConnectBotton :name="'LOGIN'" @onClickButton="onClickLogin" />
        <div class="or">OR</div>
        <ConnectBotton :name="'CONNECT WITH FACEBOOK'" :svg="'facebook'" :color="'#395998'" />
      </div>

      <div v-else class="profile-connect">
        <ConnectBotton :name="'LOGOUT'" @onClickButton="onClickLogOut" />
      </div>
    </div>
  </div>
</template>

<script>
import ConnectBotton from '@/components/ConnectBotton'

import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  name: 'Profile',
  components: {
    ConnectBotton
  },
  computed: {
    ...mapGetters(['loginStatus']),
    ...mapState('login', [
      'userId',
      'userAvatar'
    ])
  },
  methods: {
    ...mapActions('login', [
      'PostLogOut'
    ]),
    onClickLogin() {
      this.$router.push('/login')
    },
    onClickLogOut() {
      this.PostLogOut()
    }
  }
}
</script>

<style lang="stylus" scoped>
.profile
  padding 0 20px 65px
  &-content
    display flex
    flex-direction column
    align-items center
    .avatar
      padding-top 130px
      width 90px
      img
        width 100%
    .info
      padding-top 20px
      font-size 40px
      color #000
      opacity 0.7

  &-connect
    width 100%
    margin-top 56px
    .or
      color #000
      opacity 0.6
      width 100%
      text-align center
      padding 23px 0 31px 0
</style>
