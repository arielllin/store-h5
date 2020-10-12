<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(item, index) in restaurants" :key="index">
      <div
        class="swiper-image"
        :style="{ backgroundImage: `url(${item.restaurant.featured_image})` }"
      />
      <div class="swiper-title">
        <div class="main">{{ item.restaurant.name }}</div>
        <div class="sub">
          <span>{{ item.restaurant.currency }}</span>
          <span>{{ item.restaurant.establishment[0] }}</span>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: 'SwiperForMenu',
  props: {
    restaurants: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      swiperOption: {
        width: 140,
        spaceBetween: 14,
        slidesOffsetBefore: 14,
        slidesOffsetAfter: -14,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
          // dynamicBullets: true
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper
  &-image
    background-position center
    background-repeat no-repeat
    background-size cover
    height 140px
    border-radius 8px

  &-title
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
