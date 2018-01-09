import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Home from '@/components/Home'
import Me from '@/components/Me'
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
    }, {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
})
