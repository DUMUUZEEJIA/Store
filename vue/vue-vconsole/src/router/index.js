import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Btn from '@/components/Btn'
import JsTip from '@/pages/jsTip'
import Login from '@/pages/login'
import Login from '@/pages/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/btn',
      name: 'Btn',
      component: Btn
    },
    {
      path: '/jstip',
      name: 'JsTip',
      component: JsTip
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
