<template>
  <div>
    <swiper
      class="swiper"
      :options="swiperOption"
    >
      <swiper-slide>
        <div
          class="image"
          :style="{ backgroundImage: `url(${restaurant.featured_image})` }"
        />
      </swiper-slide>
    </swiper>
    <div class="content">
      <div class="content-title">{{ restaurant.name }}</div>
      <div class="content-info">
        <span>{{ restaurant.currency }}</span>
        <span v-for="(tag, tagIndex) in restaurant.establishment" :key="tagIndex">{{ tag }}</span>
      </div>
      <div class="content-next-info">
        <div>{{ restaurant.user_rating.aggregate_rating }}</div>
        <div class="align">
          <svg-icon class="right" icon-class="Staricon" />
          {{ ratings(restaurant.user_rating.votes) }}
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
  </div>
</template>

<script>
export default {
  name: 'SwiperForRestaurant',
  props: {
    restaurant: {
      type: Object,
      default: () => {}
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
.swiper
  display flex
  flex-direction column

.image
  background-position center
  background-repeat no-repeat
  background-size cover
  border-radius 12px
  height 185px

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
