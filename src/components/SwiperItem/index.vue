<template>
  <swiper-slide>
    <div
      class="image"
      :style="{ backgroundImage: `url(${img})`, height: `${imgHeight}px`, 'border-radius': `${radius}px` }"
    />
    <slot />
  </swiper-slide>
</template>

<script>
export default {
  name: 'SwiperSmall',
  props: {
    img: {
      type: String,
      default: ''
    },
    imgHeight: {
      type: Number,
      default: 185
    },
    radius: {
      type: Number,
      default: 10
    }
  }
}
</script>

<style lang="stylus" scoped>
.image
  background-position center
  background-repeat no-repeat
  background-size cover
</style>
