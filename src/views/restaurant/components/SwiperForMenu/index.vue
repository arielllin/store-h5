<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide
      v-for="(item, index) in restaurants"
      :key="index"
    >
      <Info
        :img="item.restaurant.featured_image"
        :title="item.restaurant.name"
        :currency="item.restaurant.currency"
        :establishment="item.restaurant.establishment[0]"
        @onClickImg="onClickImg"
      />
    </swiper-slide>
  </swiper>
</template>

<script>
import Info from './info'

export default {
  name: 'SwiperForMenu',
  components: { Info },
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
  },
  methods: {
    onClickImg(title) {
      this.$emit('onClickImg', title)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
