<template>
  <div
    class="connect-botton"
    :style="{'background-color': color}"
    @click="onClickButton"
  >
    <svg-icon class="icon" :icon-class="svg" />
    <div class="text">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: 'ConnectBotton',
  props: {
    name: {
      type: String,
      default: ''
    },
    svg: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#22A45D'
    }
  },
  methods: {
    onClickButton() {
      this.$emit('onClickButton')
    }
  }
}
</script>

<style lang="stylus" scoped>
.connect-botton
  width 100%
  height 48px
  border-radius 8px
  color #fff
  display flex
  align-items center
  font-size 12px
  .icon
    position absolute
    font-size 20px
    margin-left 16px
  .text
    margin 0 auto
</style>
