<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <slot />
      <div v-if="showPagination" slot="pagination" class="swiper-pagination" />
    </swiper>
    <slot name="content" />
  </div>
</template>

<script>
export default {
  name: 'SwiperLarge',
  title: 'Pagination',
  props: {
    showPagination: {
      type: Boolean,
      default: false
    },
    imgWidth: {
      type: Number,
      default: 335
    },
    imgSpaceBetween: {
      type: Number,
      default: 20
    },
    imgSlidesOffsetBefore: {
      type: Number,
      default: 20
    },
    imgSlidesOffsetAfter: {
      type: Number,
      default: -20
    }
  },
  data() {
    return {
      swiperOption: {
        width: this.imgWidth,
        spaceBetween: this.imgSpaceBetween,
        slidesOffsetBefore: this.imgSlidesOffsetBefore,
        slidesOffsetAfter: this.imgSlidesOffsetAfter,
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
  // position relative
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
</style>
