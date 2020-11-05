import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './modules/home'
import Search from './modules/search'
import Orders from './modules/orders'
import Profile from './modules/profile'
import restaurant from './modules/restaurant'
import login from './modules/login'
import restaurants from './modules/restaurants'

Vue.use(VueRouter)

const routes = []

routes.push(Home)
routes.push(Search)
routes.push(Orders)
routes.push(Profile)
routes.push(restaurant)
routes.push(login)
routes.push(restaurants)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export default router
