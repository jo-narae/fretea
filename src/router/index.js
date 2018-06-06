import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/layout/Index'
import Layout from '@/components/layout/Layout'
import Main from '@/components/Main'
import Login from '@/components/Login'
import Shop from '@/components/Shop'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
      	{
        	path: '/',
          component: Main,
          meta: { pageName: 'main'},
        },
        {
        	path: 'login',
          component: Login,
          meta: { pageName: 'login'},
        },
        {
        	path: 'shop',
          component: Shop,
          meta: { pageName: 'shop'},
        }
      ]
    }
  ]
})
