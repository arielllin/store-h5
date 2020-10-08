<template>
  <div class="orders">
    <div class="orders-title">
      Your Orders
    </div>
    <ContentClearWrap class="table" :title="'UPCOMING ORDERS'">
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
    </ContentClearWrap>
  </div>
</template>

<script>
import ContentClearWrap from '@/components/ContentClearWrap'
import LeftPicRightContent from '@/components/LeftPicRightContent'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'Search',
  components: {
    ContentClearWrap,
    LeftPicRightContent
  },
  computed: {
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
</style>
