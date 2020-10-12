<template>
  <swiper class="swiper mg-t mg-b" :options="swiperOption">
    <swiper-slide
      v-for="(item, index) in banners"
      :key="index"
    >
      <div
        class="image big"
        :style="{ backgroundImage: `url(${item})` }"
      />
    </swiper-slide>
    <div slot="pagination" class="swiper-pagination" />
  </swiper>
</template>

<script>
export default {
  name: 'SwiperForTopBanner',
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      swiperOption: {
        width: 335,
        spaceBetween: 20,
        slidesOffsetBefore: 20,
        slidesOffsetAfter: -20,
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
  margin-top 24px
  margin-bottom 34px
  &-pagination
    right 20px
    left auto
    width auto
  >>>.swiper-pagination-bullet
    background #fff
    height 5px
    border-radius 35%
  >>>.swiper-pagination-bullet-active
    background #fff

.image
  background-position center
  background-repeat no-repeat
  background-size cover
  border-radius 10px
  height 185px
</style>
