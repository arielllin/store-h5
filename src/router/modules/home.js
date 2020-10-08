export default {
  path: '/',
  component: () => import(/* webpackChunkName: 'layout' */ '@/views/layout'),
  redirect: 'home',
  children: [
    {
      name: 'Home',
      path: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/home')
    }
  ]
}
