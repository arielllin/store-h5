<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide
      v-for="(item, index) in collections"
      :key="index"
    >
      <div
        class="image"
        :style="{ backgroundImage: `url(${item.collection.image_url})` }"
      />
      <div class="title">
        <div class="title-main">{{ item.collection.title }}</div>
      </div>
      <div class="rank">{{ item.collection.res_count }}</div>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: 'SwiperForCollection',
  props: {
    collections: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      swiperOption: {
        width: 200,
        spaceBetween: 14,
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
