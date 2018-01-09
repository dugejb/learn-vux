import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'
import Me from '@/components/Me'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Wallet from '@/components/Wallet'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [{
        path: '/home',
        component: Home
      }, {
        path: '/me',
        component: Me
      }]
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/wallet',
      name: 'Wallet',
      component: Wallet
    }
  ]
})
