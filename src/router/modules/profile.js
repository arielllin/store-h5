export default {
  path: '/',
  component: () => import(/* webpackChunkName: 'layout' */ '@/views/layout'),
  redirect: 'profile',
  children: [
    {
      name: 'Profile',
      path: 'profile',
      component: () =>
        import(/* webpackChunkName: 'search' */ '@/views/profile')
    }
  ]
}
