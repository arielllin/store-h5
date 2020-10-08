<template>
  <div class="restaurant">
    <SwiperWrap
      show-pagination
      :img-width="375"
      :img-space-between="0"
      :img-slides-offset-before="0"
      :img-slides-offset-after="0"
    >
      <SwiperItem
        v-for="(item, index) in firstSwiper"
        :key="index"
        :img="item"
        :img-height="280"
        :radius="0"
      />
    </SwiperWrap>
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

    <div class="menu">
      <div class="menu-title">Featured Items</div>
      <SwiperWrap
        :img-width="140"
        :img-space-between="14"
      >
        <SwiperItem
          v-for="(item, index) in restaurants.slice(0,5)"
          :key="index"
          :img="item.restaurant.featured_image"
          :img-height="140"
          :radius="8"
        >
          <div class="title">
            <div class="title-main">{{ item.restaurant.name }}</div>
            <div class="title-sub">
              <span>{{ item.restaurant.currency }}</span>
              <span>{{ item.restaurant.establishment[0] }}</span>
            </div>
          </div>
        </SwiperItem>
      </SwiperWrap>
    </div>

    <div class="menu">
      <div class="menu-title">Most Popular</div>
      <div class="item-wrap">
        <LeftPicRightContent
          v-for="(item, index) in restaurants.slice(5,8)"
          :key="index"
          :order="item"
          class="item"
          :class="{ 'last-item': index - 2 === 0 }"
        />
      </div>
    </div>

    <div class="menu">
      <div class="menu-title">Seafood</div>
      <div class="item-wrap">
        <LeftPicRightContent
          v-for="(item, index) in restaurants.slice(8,18)"
          :key="index"
          :order="item"
          class="item"
          :class="{ 'last-item': index - 2 === 0 }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SwiperWrap from '@/components/SwiperWrap'
import SwiperItem from '@/components/SwiperItem'
import LeftPicRightContent from '@/components/LeftPicRightContent'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'Restaurant',
  components: {
    SwiperItem,
    SwiperWrap,
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
    },
    freeShipment() {
      return shipping => shipping === 0 ? 'Free' : shipping
    },
    ratings() {
      return ratings => ratings > 200 ? '200+Ratings' : ratings
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

.content
  // width 335px
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
.menu
  &-title
    color #000
    font-size 20px
    letter-spacing 0.44px
    line-height 24px
    padding 0 20px
    margin-top 14px
    margin-bottom 18px
  .title
    margin-top 10px
    margin-bottom 12px
    &-main
      width 140px
      height 22px
      overflow hidden
      color #000
      font-size 16px
      letter-spacing -0.28px
      line-height 24px
    &-sub
      width 100%
      color #000
      opacity 0.6
      font-size 14px
      letter-spacing -0.24px
      line-height 20px
      span
        margin-right 8px

.item-wrap
  padding 0 20px
.item
  margin-top 20px
  padding-bottom 20px
  border-bottom 1px solid #eee

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

.mg-r
  margin-right 22px

.last-item
  border none

.icon
  position absolute
  width 30px
  height 30px
  z-index 50
  top 20px
  left 16px
</style>
