<template>
  <div class="menu">
    <div
      v-for="(item, index) in menu"
      :key="index"
      class="menu-item"
      @click="onClick(index)"
    >
      <svg-icon
        class="icon"
        :class="{ 'svg-selected': currentMenu === index }"
        :icon-class="item.svg"
      />
      <span
        class="text"
        :class="{ 'selected': currentMenu === index }"
      >
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    menu: {
      type: Array,
      default: () => []
    },
    currentMenu: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onClick(index) {
      this.$emit('onChangeMenu', index)
    }
  }
}
</script>

<style lang="stylus" scoped>
.menu
  position fixed
  bottom 0
  width 375px
  height 65px
  padding 0 36px
  display flex
  justify-content space-between
  align-items center
  background-color #fff
  box-sizing border-box
  z-index 100
  &-item
    display flex
    flex-direction column
    align-items center
    .icon
      font-size 30px
      color #868686
    .text
      font-size 10px
      color #868686
    .selected
      color #22A45D
    .svg-selected
      background-image url('~@/assets/images/home/Deactive.png')
      background-position 3% 10%
      background-repeat no-repeat
      color #22A45D
</style>
