export default {
  path: '/',
  component: () => import(/* webpackChunkName: 'layout' */ '@/views/layout'),
  redirect: 'home',
  children: [
    {
      name: 'Search',
      path: '/search',
      component: () => import(/* webpackChunkName: 'search' */ '@/views/search')
    }
  ]
}
