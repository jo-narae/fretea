import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout/Layout'
import Main from '@/components/Main'
import Shop from '@/components/Shop'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
      	{
        	path: '/',
          component: Main
        },
        {
        	path: 'shop',
          component: Shop
        }
      ]
    }
  ]
})
