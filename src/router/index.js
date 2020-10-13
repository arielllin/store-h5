import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './modules/home'
import Search from './modules/search'
import Orders from './modules/orders'
import Profile from './modules/profile'
import restaurant from './modules/restaurant'
import login from './modules/login'

Vue.use(VueRouter)

const routes = []

routes.push(Home)
routes.push(Search)
routes.push(Orders)
routes.push(Profile)
routes.push(restaurant)
routes.push(login)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
