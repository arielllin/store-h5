<template>
  <div class="search">
    <div class="search-bar">
      <svg-icon class="icon" icon-class="search" />
      <input type="search" placeholder="Search" autocomplete="off" class="input" @focus="onClickSearch">
      <div v-if="searching" class="cancel" @click="onClickCancel">Cancel</div>
    </div>

    <div v-if="!searching" class="search-categories">
      <div class="text">
        Top Categories
      </div>
      <div class="categories-wrap">
        <div
          v-for="(item, index) in categories"
          :key="index"
          :style="{ backgroundImage: 'url(' + item.img + ')' }"
          class="category"
        >
          <div class="title">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>

    <ContentClearWrap v-else :title="'RECENT SEARCHES'" />
  </div>
</template>

<script>
import ContentClearWrap from '@/components/ContentClearWrap'

export default {
  name: 'Search',
  components: {
    ContentClearWrap
  },
  data() {
    return {
      searching: false,
      categories: [
        { title: 'Fast Food', img: require('@/assets/images/home/img1.jpg') },
        { title: 'Breakfast and Brunch', img: require('@/assets/images/home/img1.jpg') },
        { title: 'Mexican', img: require('@/assets/images/home/img1.jpg') },
        { title: 'Bakery', img: require('@/assets/images/home/img1.jpg') },
        { title: 'Desserts', img: require('@/assets/images/home/img1.jpg') },
        { title: 'Burgers', img: require('@/assets/images/home/img1.jpg') },
        { title: 'Desserts', img: require('@/assets/images/home/img1.jpg') },
        { title: 'Burgers', img: require('@/assets/images/home/img1.jpg') }
      ]
    }
  },
  methods: {
    onClickSearch() {
      this.searching = true
    },
    onClickCancel() {
      this.searching = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.search
  padding 0 20px 65px
  &-bar
    padding-top 21px
    padding-bottom 43px
    display flex
    align-items center
    .icon
      color #868686
      width 34px
      height 34px
      margin-right 18px
    .input
      width 230px
      color #22A45D
      font-size 24px
      letter-spacing  0.14px
      line-height 32px
      opacity 0.7
      outline none
      border none
    input::-webkit-search-decoration,
    input::-webkit-search-cancel-button
      display none
    .cancel
      color #000
      font-size 12px
      letter-spacing  -0.24px
      line-height 20px
      opacity 0.7
      margin-left 10px

  &-categories
    .text
      color #000
      font-size 16px
      letter-spacing  -0.28px
      line-height 24px
      margin-bottom 26px
    .categories-wrap
      display flex
      justify-content space-between
      flex-wrap wrap
      .category
        width 160px
        height 160px
        margin-bottom 16px
        background-position center
        background-repeat no-repeat
        background-size cover
        border-radius 10px
        background-color rgba(0, 0, 0, .5)
        // 設置背景混和模式為相乘模式
        background-blend-mode multiply
        .title
          height 160px
          display flex
          text-align center
          justify-content center
          align-items center
          color #fff
          font-size 16px
          letter-spacing  -0.28px
          line-height 24px
</style>
