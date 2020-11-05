<template>
  <div class="header">
    <div class="header-icon" @click="onClickBack">
      <svg-icon class="icon back" icon-class="back_block" />
    </div>
    <div class="header-title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClickBack() {
      this.$emit('onClickBack')
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  z-index 100
  background-color #fff
  width 100%
  height 44px
  display flex
  align-items center
  position fixed
  top 0
  &-icon
    position absolute
    margin-left 20px
    height 22px
  &-title
    width 100%
    display flex
    justify-content center
    font-size 16px
    letter-spacing -0.28px
    line-height 24px
  .back
    position absolute
    font-size 20px

</style>
