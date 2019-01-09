import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import BaoHe from '@/components/BaoHe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BaoHe',
      component: BaoHe
    },
    {
      path: '/baohe',
      name: 'BaoHe',
      component: BaoHe
    }
  ]
})
