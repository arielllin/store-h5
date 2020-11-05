export default {
  path: '/restaurant',
  component: () => import(/* webpackChunkName: 'restaurant' */ '@/views/restaurant'),
  query: route => ({
    Id: route.query.Id
  }),
  children: []
}
