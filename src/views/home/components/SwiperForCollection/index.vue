<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide
      v-for="(item, index) in collections"
      :key="index"
    >
      <Info
        :img="item.collection.image_url"
        :title="item.collection.title"
        :count="item.collection.res_count"
        @onClickImg="onClickImg(16769546)"
      />
    </swiper-slide>
  </swiper>
</template>

<script>
import Info from './info'

export default {
  name: 'SwiperForCollection',
  components: { Info },
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
  },
  methods: {
    onClickImg(resId) {
      this.$emit('onClickImg', resId)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
