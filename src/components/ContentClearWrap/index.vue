<template>
  <div class="clear-wrap">
    <div class="title-text">
      <div class="title">{{ title }}</div>
      <div class="clear">CLEAR ALL</div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ContentClearWrap',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.clear-wrap
  .title-text
    display flex
    justify-content space-between
    align-items center
    .title
      color #868686
      font-size 16px
      letter-spacing  0.6px
      line-height 24px
    .clear
      color #000
      font-size 12px
      line-height 20px
</style>
