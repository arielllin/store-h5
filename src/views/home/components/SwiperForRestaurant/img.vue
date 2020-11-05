<template>
  <div
    class="image"
    :style="{ backgroundImage: `url(${image})` }"
    @click="onClickImg"
  />
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClickImg() {
      this.$emit('onClickImg')
    }
  }
}
</script>

<style lang="stylus" scoped>
.image
  background-position center
  background-repeat no-repeat
  background-size cover
  border-radius 12px
  height 185px
</style>
