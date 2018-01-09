import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'
import Me from '@/components/Me'
// import WeWallet from '@/components/Wallet'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[{
        path:'/home',
        component:Home
      },{
        path:'/me',
        component:Me
      }]
    },
     {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // {
    //   path:'/wallet',
    //   name:'Wallet',
    //   component: Wallet
    // }
  ]
})
