import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout/Layout'
import Main from '@/components/Main'
import Shop from '@/components/Shop'
import Login from '@/components/member/Login'
import Join from '@/components/member/Join'
import JoinComplete from '@/components/member/JoinComplete'

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
          component: Main,
          meta: { navActive: false, pageName: 'main'},
        },
        {
          path: 'member/login',
          component: Login,
          meta: { navActive: true, pageName: 'login'},
        },
        {
          path: 'member/join',
          component: Join,
          meta: { navActive: true, pageName: 'join'},
        },
        {
          path: 'member/joinComplete',
          component: JoinComplete,
          meta: { navActive: true, pageName: 'join'},
        },
        {
        	path: 'shop',
          component: Shop,
          meta: { navActive: false, pageName: 'shop'},
        },
      ]
    }
  ]
})
