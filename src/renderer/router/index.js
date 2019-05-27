import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/Dashboard').default,
      props: true
    },
    {
      path: '/posts',
      name: 'posts',
      component: require('@/components/Dashboard').default,
      props: true
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
