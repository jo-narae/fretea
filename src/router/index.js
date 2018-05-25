import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    }
  ]
})
