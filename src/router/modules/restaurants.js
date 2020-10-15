export default {
  path: '/restaurants',
  component: () => import(/* webpackChunkName: 'restaurants' */ '@/views/restaurants'),
  query: route => ({
    type: route.query.type
  }),
  children: []
}
