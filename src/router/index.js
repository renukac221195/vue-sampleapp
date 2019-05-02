import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage'
import UserHome from '@/components/UserHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/UserHome',
      name: 'UserHome',
      component: UserHome
    }
  ]
})
