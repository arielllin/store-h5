export default {
  path: '/',
  component: () => import(/* webpackChunkName: 'layout' */ '@/views/layout'),
  redirect: 'orders',
  children: [
    {
      name: 'Orders',
      path: 'orders',
      component: () => import(/* webpackChunkName: 'order' */ '@/views/orders')
    }
  ]
}
