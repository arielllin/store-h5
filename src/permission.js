import router from './router'
import store from './store'
import { getLoginStatus } from '@/utils/auth' // getToken from cookie
import { whiteList } from '@/utils/constant'

// 白名單設定在此
router.beforeEach((to, from, next) => {
  next()
  if (getLoginStatus() === 'true') {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    store.dispatch('login/LogOut')
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      // next()
      next(`/login?redirect=${to.fullPath.replace(/&/g, '%26')}`) // 否则全部重定向到登录页
    }
    next()
  }
})

router.afterEach((to, from) => {
  // Do something with router hook
})
