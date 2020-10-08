<template>
  <div>
    <Menu
      :menu="menu"
      :current-menu="currentMenu"
      @onChangeMenu="onChangeMenu"
    />
    <router-view />
  </div>
</template>

<script>
import Menu from '@/components/Menu'

export default {
  name: 'Layout',
  components: {
    Menu
  },
  data() {
    return {
      currentMenu: 0,
      menu: [
        { svg: 'food', name: 'Home' },
        { svg: 'search', name: 'Search' },
        { svg: 'orders', name: 'Orders' },
        { svg: 'profile', name: 'Profile' }
      ]
    }
  },
  methods: {
    onChangeMenu(index) {
      if (this.currentMenu !== index) {
        this.currentMenu = index
        this.$router.push({ name: this.menu[index].name })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
