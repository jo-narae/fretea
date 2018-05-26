import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout/Layout'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
      	{
        	path: '/',
          component: Main
        }
      ]
    }
  ]
})
