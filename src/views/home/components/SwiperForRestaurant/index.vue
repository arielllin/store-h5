<template>
  <div>
    <swiper
      class="swiper"
      :options="swiperOption"
    >
      <swiper-slide>
        <Img :image="item.restaurant.featured_image" @onClickImg="onClickImg" />
      </swiper-slide>
    </swiper>
    <Info
      :title="item.restaurant.name"
      :currency="item.restaurant.currency"
      :tags="item.restaurant.establishment"
      :rating="item.restaurant.user_rating.aggregate_rating"
      :votes="item.restaurant.user_rating.votes"
    />
  </div>
</template>

<script>
import Img from './img'
import Info from './info'

export default {
  name: 'SwiperForRestaurant',
  components: { Img, Info },
  props: {
    images: {
      type: [String, Array],
      default: ''
    },
    item: {
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
  methods: {
    onClickImg() {
      this.$emit('onClickImg')
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper
  display flex
  flex-direction column
</style>
