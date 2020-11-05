<template>
  <div clsss="restaurants">
    <Header :title="$route.query.type || 'restaurants'" @onClickBack="onClickBack" />
    <div class="restaurants-content">
      <SwiperForRestaurant
        v-for="(item, index) in restaurants.slice(0,20)"
        :key="index"
        :item="item"
        @onClickImg="onClickImg(item.restaurant.R.res_id)"
      />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import SwiperForRestaurant from './components/SwiperForRestaurant/index'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'Restaurants',
  components: {
    Header,
    SwiperForRestaurant
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
    ]),
    onClickBack() {
      this.$router.back(-1)
    },
    onClickImg(resId) {
      this.$router.push({ path: '/restaurant', query: { Id: resId }})
    }
  }
}
</script>

<style lang="stylus" scoped>
.restaurants
  &-content
    margin-top 68px
</style>
