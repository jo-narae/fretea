import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout/Layout'
import Main from '@/components/Main'
import Shop from '@/components/Shop'
import Member from '@/components/Member'
import Login from '@/components/member/Login'
import Join from '@/components/member/Join'
import JoinComplete from '@/components/member/JoinComplete'
import FindIdPwd from '@/components/member/FindIdPwd'

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
          name: 'Main',
          component: Main,
          meta: { navActive: false, pageName: 'main'},
        },
        {
          path: 'member',
          name: 'Member',
          component: Member,
          children: [
            {
              path: 'login',
              name: 'Login',
              component: Login,
              meta: { navActive: true, pageName: 'login'},
            },
            {
              path: 'join',
              name: 'Join',
              component: Join,
              meta: { navActive: true, pageName: 'join'},
            },
            {
              path: 'joinComplete',
              name: 'JoinComplete',
              component: JoinComplete,
              meta: { navActive: true, pageName: 'joinComplete'},
            },
            {
              path: 'findIdPwd',
              name: 'FindIdPwd',
              component: FindIdPwd,
              meta: { navActive: true, pageName: 'findIdPwd'},
            },
          ]
        },
        {
        	path: 'shop',
          name: 'Shop',
          component: Shop,
          meta: { navActive: false, pageName: 'shop'},
        },
      ]
    }
  ]
})
