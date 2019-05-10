import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage'
import Feeds from '@/components/UserHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/Feeds',
      name: 'Feeds',
      component: Feeds
    }
  ]
})
