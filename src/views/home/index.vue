<template>
  <div class="home">
    <SwiperForTopBanner :banners="firstSwiper" />

    <TitleWrap
      :title="'Featured Partners'"
      @onClickSeeAll="onClickSeeAll"
    >
      <SwiperForCollection
        :collections="collections.slice(0,5)"
        @onClickImg="onClickImg"
      />
    </TitleWrap>

    <div class="banner mg-b">
      <img :src="imgUrl">
    </div>

    <TitleWrap
      :title="'Best Picks Restaurants by team'"
      @onClickSeeAll="onClickSeeAll"
    >
      <SwiperForCollection
        :collections="collections.slice(6,10)"
        @onClickImg="onClickImg"
      />
    </TitleWrap>

    <TitleWrap
      :title="'All Restaurants'"
      @onClickSeeAll="onClickSeeAll"
    >
      <SwiperForRestaurant
        v-for="(item, index) in restaurants.slice(0,4)"
        :key="index"
        :item="item"
        @onClickImg="onClickImg(item.restaurant.R.res_id)"
      />
    </TitleWrap>
  </div>
</template>

<script>
import TitleWrap from '@/components/TitleWrap'
import SwiperForTopBanner from './components/SwiperForTopBanner'
import SwiperForCollection from './components/SwiperForCollection/index'
import SwiperForRestaurant from './components/SwiperForRestaurant/index'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    TitleWrap,
    SwiperForTopBanner,
    SwiperForCollection,
    SwiperForRestaurant
  },
  data() {
    return {
      imgUrl: `${require('@/assets/images/home/Banner.jpg')}`
    }
  },
  computed: {
    ...mapState('cuisines', [
      'collections',
      'restaurants'
    ]),
    firstSwiper() {
      const collections = this.collections.slice(10, 15)
      const resault = collections.map(item => {
        return item.collection.image_url
      })
      return resault
    }
  },
  created() {
    this.GetCollections()
    this.GetRestaurants()
  },
  methods: {
    ...mapActions('cuisines', [
      'GetCollections',
      'GetRestaurants'
    ]),
    onClickSeeAll(title) {
      this.$router.push({ path: '/restaurants', query: { type: title }})
    },
    onClickImg(resId) {
      this.$router.push({ path: '/restaurant', query: { Id: resId }})
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  padding-bottom 65px
.banner
  text-align center
  margin-bottom 34px
</style>
