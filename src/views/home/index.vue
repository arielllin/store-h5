<template>
  <div class="home">
    <SwiperForTopBanner :banners="firstSwiper" />

    <TitleWrap :title="'Featured Partners'">
      <SwiperForCollection :collections="collections.slice(0,5)" />
    </TitleWrap>

    <div class="banner mg-b">
      <img :src="imgUrl">
    </div>

    <TitleWrap :title="'Best Picks Restaurants by team'">
      <SwiperForCollection :collections="collections.slice(6,10)" />
    </TitleWrap>

    <TitleWrap :title="'All Restaurants'">
      <SwiperForRestaurant
        v-for="(item, index) in restaurants.slice(0,4)"
        :key="index"
        :restaurant="item.restaurant"
      />
    </TitleWrap>
  </div>
</template>

<script>
import TitleWrap from '@/components/TitleWrap'
import SwiperForTopBanner from './components/SwiperForTopBanner'
import SwiperForCollection from './components/SwiperForCollection'
import SwiperForRestaurant from './components/SwiperForRestaurant'

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
    ])
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
