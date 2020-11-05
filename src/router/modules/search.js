export default {
  path: '/',
  component: () => import(/* webpackChunkName: 'layout' */ '@/views/layout'),
  redirect: 'search',
  children: [
    {
      name: 'Search',
      path: 'search',
      component: () => import(/* webpackChunkName: 'search' */ '@/views/search')
    }
  ]
}
