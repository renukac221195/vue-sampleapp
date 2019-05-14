import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage'
import Feeds from '@/components/Feeds'
import OneFeed from '@/components/OneFeed'
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
    },
    {
      path: '/OneFeed',
      name: 'OneFeed',
      component: OneFeed
    }
  ]
})
