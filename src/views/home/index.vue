<template>
  <div class="home">
    <SwiperWrap
      show-pagination
      class="mg-t mg-b"
    >
      <SwiperItem
        v-for="(item, index) in firstSwiper"
        :key="index"
        :img="item"
      />
    </SwiperWrap>

    <TitleWrap :title="'Featured Partners'">
      <SwiperWrap
        :img-width="200"
        :img-space-between="14"
      >
        <SwiperItem
          v-for="(item, index) in collections.slice(0,5)"
          :key="index"
          :img="item.collection.image_url"
          :img-height="160"
        >
          <div class="title">
            <div class="title-main">{{ item.collection.title }}</div>
            <!-- <div class="title-sub">{{ item.collection.description }}</div> -->
          </div>
          <div class="rank">{{ item.collection.res_count }}</div>
        </SwiperItem>
      </SwiperWrap>
    </TitleWrap>

    <div class="banner mg-b">
      <img :src="imgUrl">
    </div>

    <TitleWrap :title="'Best Picks Restaurants by team'">
      <SwiperWrap
        :img-width="200"
        :img-space-between="14"
      >
        <SwiperItem
          v-for="(item, index) in collections.slice(6,10)"
          :key="index"
          :img="item.collection.image_url"
          :img-height="160"
        >
          <div class="title">
            <div class="title-main">{{ item.collection.title }}</div>
            <!-- <div class="title-sub">{{ item.collection.description }}</div> -->
          </div>
          <div class="rank">{{ item.collection.res_count }}</div>
        </SwiperItem>
      </SwiperWrap>
    </TitleWrap>

    <TitleWrap :title="'All Restaurants'">
      <SwiperWrap
        v-for="(item, index) in restaurants.slice(0,4)"
        :key="index"
        :image="item.restaurant.featured_image"
      >
        <SwiperItem
          :img="item.restaurant.featured_image"
        />
        <template v-slot:content>
          <div class="content">
            <div class="content-title">{{ item.restaurant.name }}</div>
            <div class="content-info">
              <span>{{ item.restaurant.currency }}</span>
              <span v-for="(tag, tagIndex) in item.restaurant.establishment" :key="tagIndex">{{ tag }}</span>
            </div>
            <div class="content-next-info">
              <div>{{ item.restaurant.user_rating.aggregate_rating }}</div>
              <div class="align">
                <svg-icon class="right" icon-class="Staricon" />
                {{ ratings(item.restaurant.user_rating.votes) }}
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
        </template>
      </SwiperWrap>
    </TitleWrap>
  </div>
</template>

<script>
import TitleWrap from '@/components/TitleWrap'
import SwiperWrap from '@/components/SwiperWrap'
import SwiperItem from '@/components/SwiperItem'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    TitleWrap,
    SwiperItem,
    SwiperWrap
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
    },
    freeShipment() {
      return shipping => shipping === 0 ? 'Free' : shipping
    },
    ratings() {
      return ratings => ratings > 200 ? '200+' : ratings
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
  // height calc(100% - 65px)
  padding-bottom 65px
.banner
  text-align center
.mg-t
  margin-top 24px
.mg-b
 margin-bottom 34px

.title
  margin-top 14px
  margin-bottom 18px
  &-main
    width 100%
    color #000
    font-size 20px
    letter-spacing 0.44px
    line-height 24px
  &-sub
    width 100%
    color #868686
    font-size 16px
    letter-spacing -0.28px
    line-height 24px

.rank
  width 36px
  height 20px
  color #fff
  font-size 12px
  background-color #22A45D
  border-radius 6px
  display flex
  justify-content center
  align-items center

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
