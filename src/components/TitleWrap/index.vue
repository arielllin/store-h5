<template>
  <div class="title-wrap">
    <div class="title-wrap-header">
      <div class="text">
        {{ title }}
      </div>
      <div class="more">See All</div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'TitleWrap',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.title-wrap
  margin-bottom 34px
  &-header
    display flex
    justify-content space-between
    align-items center
    padding 0 20px
    margin-bottom 36px
    .text
      width 245px
      color #000
      font-size 24px
      letter-spacing 0.14px
      line-height 32px
    .more
      color #22A45D
      font-size 16px
      letter-spacing -0.28px
      line-height 24px
</style>
