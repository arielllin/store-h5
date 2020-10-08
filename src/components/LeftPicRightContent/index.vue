<template>
  <div class="left-pic-wrap">
    <div
      class="picture"
      :style="{ backgroundImage: 'url(' + order.restaurant.featured_image + ')' }"
    />
    <div class="content">
      <div class="content-restaurant-name">{{ order.restaurant.name }}</div>
      <div class="content-orders">
        <span>{{ order.restaurant.cuisines }}</span>
      </div>
      <div class="content-orders-info">
        <div class="info-left">
          <div class="price">{{ order.restaurant.currency }}</div>
          <div class="type">{{ order.restaurant.establishment[0] }}</div>
        </div>
        <div class="total">{{ `USD${order.restaurant.average_cost_for_two}` }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftPicRightContent',
  props: {
    order: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="stylus" scoped>
.left-pic-wrap
  display flex

.picture
  width 110px
  height 110px
  border-radius 10px
  background-position center
  background-repeat no-repeat
  background-size cover
  margin-right 18px

.content
  width 204px
  display flex
  flex-direction column
  &-restaurant-name
    width 200px
    height 22px
    overflow hidden
    color #000
    font-size 18px
    letter-spacing -0.32px
    line-height 24px
    margin-bottom 6px
  &-orders
    width 200px
    height 48px
    overflow hidden
    color #000
    font-size 16px
    letter-spacing -0.4px
    line-height 24px
    opacity 0.6
    margin-bottom 14px
  &-orders-info
    display flex
    justify-content space-between
    font-size 14px
    .info-left
      display flex
      .price, .type
        color #000
        letter-spacing -0.24px
        line-height 20px
        opacity 0.7
        margin-right 8px
    .total
      color #22A45D
      letter-spacing 0.6px
      line-height 20px
</style>
