<template>
  <div class="content">
    <div class="content-title">{{ title }}</div>
    <div class="content-info">
      <span>{{ currency }}</span>
      <span v-for="(tag, tagIndex) in tags" :key="tagIndex">{{ tag }}</span>
    </div>
    <div class="content-next-info">
      <div>{{ rating }}</div>
      <div class="align">
        <svg-icon class="right" icon-class="Staricon" />
        {{ ratings(votes) }}
      </div>
      <div class="align">
        <svg-icon class="icon right" icon-class="clock" />
        {{ `70 Min` }}
      </div>
      <div class="align">
        <svg-icon class="icon right" icon-class="delivery" />
        {{ freeShipment(0) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    currency: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default: () => []
    },
    rating: {
      type: String,
      default: ''
    },
    votes: {
      type: Number,
      default: 0
    }
  },
  computed: {
    freeShipment() {
      return shipping => shipping === 0 ? 'Free' : shipping
    },
    ratings() {
      return ratings => ratings > 200 ? '200+' : ratings
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  width 283px
  margin-top 16px
  padding 0 20px
  &-title
    font-size 20px
    color #000
    letter-spacing 0.44px
    line-height 24px
    margin-bottom 5px
  &-info
    display flex
    font-size 16px
    color #868686
    letter-spacing -0.28px
    line-height 24px
    margin-bottom 12px
    span
      margin-right 23px
  &-next-info
    width 210px
    display flex
    justify-content space-between
    font-size 12px
    color #000
    opacity 0.7
    letter-spacing -0.24px
    line-height 20px
    margin-bottom 24px
    .align
      display flex
      align-items center
    .right
      margin-right 8px
    .icon
      width 16px
      height 16px
</style>
