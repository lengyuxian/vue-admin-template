import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/errorPage/404'), hidden: true },
  { path: '/401', component: () => import('@/views/errorPage/401'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: '',
    children: [{
      path: '',
      component: () => import('@/views/index/index'),
      name: '首页',
      meta: { title: '首页', icon: 'icon-users', noCache: true }
    }]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/manage',
    children: [{
      path: 'manage',
      component: () => import('@/views/user/manage'),
      name: '用户管理',
      meta: { title: '用户管理', icon: 'icon-users', noCache: true }
    }]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
  // base: '/admin'
})

export const asyncRouterMap = [
]
