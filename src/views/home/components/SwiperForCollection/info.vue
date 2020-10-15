<template>
  <div>
    <div
      class="image"
      :style="{ backgroundImage: `url(${img})` }"
      @click="onClickImg"
    />
    <div class="title">
      <div class="title-main">{{ title }}</div>
    </div>
    <div class="rank">{{ count }}</div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    count: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onClickImg() {
      this.$emit('onClickImg', this.title)
    }
  }
}
</script>

<style lang="stylus" scoped>
.image
  background-position center
  background-repeat no-repeat
  background-size cover
  border-radius 10px
  height 160px

.title
  margin-top 14px
  margin-bottom 18px
  &-main
    width 100%
    color #000
    font-size 20px
    letter-spacing 0.44px
    line-height 24px
  &-sub
    width 100%
    color #868686
    font-size 16px
    letter-spacing -0.28px
    line-height 24px

.rank
  width 36px
  height 20px
  color #fff
  font-size 12px
  background-color #22A45D
  border-radius 6px
  display flex
  justify-content center
  align-items center
</style>
