<template>
  <div class="restaurant">
    <MainInfo :restaurant="restaurant" :banners="firstSwiper" />

    <MenuWrap :title="'Featured Items'">
      <SwiperForMenu :restaurants="restaurants.slice(0, 5)" />
    </MenuWrap>

    <MenuWrap :title="'Most Popular'">
      <div class="item-wrap">
        <LeftPicRightContent
          v-for="(item, index) in restaurants.slice(5,8)"
          :key="index"
          :order="item"
          class="item"
          :class="{ 'last-item': index - 2 === 0 }"
        />
      </div>
    </MenuWrap>

    <MenuWrap :title="'Seafood'">
      <div class="item-wrap">
        <LeftPicRightContent
          v-for="(item, index) in restaurants.slice(8,18)"
          :key="index"
          :order="item"
          class="item"
          :class="{ 'last-item': index - 2 === 0 }"
        />
      </div>
    </MenuWrap>
  </div>
</template>

<script>
import MainInfo from './components/MainInfo'
import MenuWrap from './components/MenuWrap'
import SwiperForMenu from './components/SwiperForMenu'
import LeftPicRightContent from '@/components/LeftPicRightContent'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'Restaurant',
  components: {
    MainInfo,
    MenuWrap,
    SwiperForMenu,
    LeftPicRightContent
  },
  computed: {
    ...mapState('cuisines', [
      'restaurant',
      'restaurants'
    ]),
    firstSwiper() {
      const restaurants = this.restaurants.slice(0, 5)
      const resault = restaurants.map(item => {
        return item.restaurant.featured_image
      })
      return resault
    }
  },
  created() {
    this.GetSingleRestaurant()
    this.GetRestaurants()
  },
  methods: {
    ...mapActions('cuisines', [
      'GetSingleRestaurant',
      'GetRestaurants'
    ])
  }
}
</script>

<style lang="stylus" scoped>
.restaurant
  .main-image
    border-radius 0

.item-wrap
  padding 0 20px
.item
  margin-top 20px
  padding-bottom 20px
  border-bottom 1px solid #eee

.last-item
  border none
</style>
