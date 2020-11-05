<template>
  <div class="orders">
    <!-- <div class="orders-title">
      Your Orders
    </div> -->
    <LandingPage login-status>
      <div v-if="!loginStatus">
        <div class="title">Please login</div>
        <div class="content">
          Easily find your type of food craving and you’ll get delivery in wide range.
        </div>
      </div>

      <div v-else>
        <div class="title">Choose your food</div>
        <div class="content">
          Easily find your type of food craving and you’ll get delivery in wide range.
        </div>
      </div>
    </LandingPage>
    <!-- <ContentClearWrap class="table" :title="'UPCOMING ORDERS'">
      <div class="item-wrap">
        <LeftPicRightContent
          v-for="(item, index) in restaurants.slice(0,3)"
          :key="index"
          :order="item"
          class="item"
        />
      </div>
    </ContentClearWrap>

    <ContentClearWrap class="table" :title="'PAST ORDERS'">
      <div class="item-wrap">
        <LeftPicRightContent
          v-for="(item, index) in restaurants.slice(3,8)"
          :key="index"
          :order="item"
          class="item"
        />
      </div>
    </ContentClearWrap> -->
  </div>
</template>

<script>
// import ContentClearWrap from '@/components/ContentClearWrap'
// import LeftPicRightContent from '@/components/LeftPicRightContent'
import LandingPage from './components/LandingPage'

import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  name: 'Search',
  components: {
    // ContentClearWrap,
    // LeftPicRightContent
    LandingPage
  },
  computed: {
    ...mapGetters(['loginStatus']),
    ...mapState('cuisines', [
      'restaurants'
    ])
  },
  created() {
    this.GetRestaurants()
  },
  methods: {
    ...mapActions('cuisines', [
      'GetRestaurants'
    ])
  }
}
</script>

<style lang="stylus" scoped>
.orders
  padding 0 20px 65px
  &-title
    color #000
    font-size 16px
    letter-spacing  -0.28px
    line-height 24px
    text-align center
    padding-top 20px

.table
  margin-top 34px
  margin-bottom 34px

.item-wrap
  margin-top 32px

.item
  margin-top 20px

.title
  font-size 30px
  color #000
  letter-spacing 0.32px
  line-height 38px
  text-align center
.content
  padding-top 24px
  font-size 16px
  color #000
  letter-spacing -0.4px
  line-height 24px
  opacity 0.6
  text-align center
</style>
