<template>
  <div class="menu-wrap">
    <div class="title">{{ title }}</div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MenuWrap',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.menu-wrap
  margin-top 17px
  .title
    color #000
    font-size 20px
    letter-spacing 0.44px
    line-height 24px
    padding 0 20px
    margin-bottom 18px
</style>
