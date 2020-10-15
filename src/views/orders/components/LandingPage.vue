<template>
  <div class="landing-page">
    <div class="image">
      <img :src="require('@/assets/images/orders/Illustrations.png')" alt="">
    </div>
    <slot />
    <ConnectBotton class="botton" :name="bottonName" @onClickButton="onClickButton" />
  </div>
</template>

<script>
import ConnectBotton from '@/components/ConnectBotton'

export default {
  components: {
    ConnectBotton
  },
  props: {
    loginStatus: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    bottonName() {
      return this.loginStatus ? 'GET STARTED' : 'LOGIN'
    }
  },
  methods: {
    onClickButton() {
      return this.loginStatus
        ? this.$router.push('/restaurants')
        : this.$router.push('/login')
    }
  }
}
</script>

<style lang="stylus" scoped>
.landing-page
  padding-top 25px
  display flex
  flex-direction column
  align-items center

.image
  width 307px
  margin-bottom 45px
  img
    width 100%

.botton
  margin-top 100px
</style>
