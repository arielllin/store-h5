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

    <svg-icon class="icon" icon-class="back" />
    <div v-if="restaurant !== null" class="content">
      <div class="content-title">{{ restaurant.name }}</div>
      <div class="content-info">
        <span>{{ restaurant.currency }}</span>
        <span>{{ restaurant.cuisines }}</span>
      </div>
      <div class="content-next-info">
        <div>{{ restaurant.user_rating.aggregate_rating }}</div>
        <div class="align">
          <svg-icon class="right" icon-class="Staricon" />
          {{ ratings(restaurant.user_rating.votes) }}
        </div>
      </div>
      <div class="content-third-info">
        <div class="info-wrap mg-r">
          <svg-icon class="info-wrap-icon" icon-class="delivery" />
          <div class="info-wrap-text">
            <span class="main">{{ freeShipment(0) }}</span>
            <span class="sub">Delivery</span>
          </div>
        </div>
        <div class="info-wrap">
          <svg-icon class="info-wrap-icon" icon-class="clock" />
          <div class="info-wrap-text">
            <span class="main">{{ `70` }}</span>
            <span class="sub">Minutes</span>
          </div>
        </div>
        <div class="botton">
          TAKE AWAY
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainInfo',
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
  computed: {
    freeShipment() {
      return shipping => shipping === 0 ? 'Free' : shipping
    },
    ratings() {
      return ratings => ratings > 200 ? '200+Ratings' : ratings
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

.content
  padding 20px 20px 37px
  &-title
    font-size 24px
    color #000
    letter-spacing 0.14px
    line-height 32px
    margin-bottom 14px
  &-info
    display flex
    font-size 16px
    color #868686
    letter-spacing -0.28px
    line-height 24px
    margin-bottom 20px
    span
      margin-right 23px
  &-next-info
    width 125px
    display flex
    justify-content space-between
    font-size 12px
    color #000
    opacity 0.7
    letter-spacing -0.24px
    line-height 20px
    margin-bottom 28px
    .align
      display flex
      align-items center
    .right
      margin-right 8px
    .icon
      width 16px
      height 16px
  &-third-info
    display flex
    .info-wrap
      display flex
      align-items center
      &-icon
        color #22A45D
        width 16px
        height 16px
        margin-right 6px
      &-text
        display flex
        flex-direction column
        .main
          font-size 16px
          color #000
          letter-spacing -0.28px
          line-height 24px
        .sub
          font-size 12px
          color #000
          opacity 0.6
          letter-spacing -0.24px
          line-height 20px

.botton
  text-align center
  padding-top 12px
  font-size 12px
  color #22A45D
  letter-spacing 1.03px
  line-height 14px
  border 1px solid #22A45D
  border-radius 6px
  width 113px
  height 38px
  margin-left 60px

.icon
  position absolute
  width 30px
  height 30px
  z-index 50
  top 20px
  left 16px

.mg-r
  margin-right 22px
</style>
