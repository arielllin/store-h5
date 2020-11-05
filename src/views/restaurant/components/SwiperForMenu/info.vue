<template>
  <div>
    <div
      class="image"
      :style="{ backgroundImage: `url(${img})` }"
      @click="onClickImg"
    />
    <div class="title">
      <div class="main">{{ title }}</div>
      <div class="sub">
        <span>{{ currency }}</span>
        <span>{{ establishment }}</span>
      </div>
    </div>
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
    currency: {
      type: String,
      default: ''
    },
    establishment: {
      type: String,
      default: ''
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
  height 140px
  border-radius 8px

.title
  margin-top 10px
  margin-bottom 12px
  .main
    width 140px
    height 22px
    overflow hidden
    color #000
    font-size 16px
    letter-spacing -0.28px
    line-height 24px
  .sub
    width 100%
    color #000
    opacity 0.6
    font-size 14px
    letter-spacing -0.24px
    line-height 20px
    span
      margin-right 8px
</style>
