export default {
  path: '/restaurant',
  component: () =>
    import(/* webpackChunkName: 'restaurant' */ '@/views/restaurant'),
  children: []
}
