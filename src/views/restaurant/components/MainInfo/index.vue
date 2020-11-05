<template>
  <div class="main-info">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide
        v-for="(item, index) in banners"
        :key="index"
      >
        <div
          class="image"
          :style="{ backgroundImage: `url(${item})` }"
        />
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination" />
    </swiper>

    <div @click="onClickBack">
      <svg-icon class="icon" icon-class="back" />
    </div>

    <Info
      v-if="restaurant !== null"
      :name="restaurant.name"
      :currency="restaurant.currency"
      :cuisines="restaurant.cuisines"
      :rating="restaurant.user_rating.aggregate_rating"
      :votes="restaurant.user_rating.votes"
    />
  </div>
</template>

<script>
import Info from './info'

export default {
  name: 'MainInfo',
  components: {
    Info
  },
  props: {
    banners: {
      type: Array,
      default: () => []
    },
    restaurant: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      swiperOption: {
        width: 375,
        spaceBetween: 0,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
          // dynamicBullets: true
        }
      }
    }
  },
  methods: {
    onClickBack() {
      this.$emit('onClickBack')
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper
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
  height 280px

.icon
  position absolute
  width 30px
  height 30px
  z-index 50
  top 20px
  left 16px
</style>
