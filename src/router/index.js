import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },
  {
    path: '/base',
    component: Layout,
    name: '基础信息管理',
    meta: { title: '基础信息管理', icon: 'example' },
    children: [
      {
        path: 'label',
        name: 'Label',
        component: () => import('@/views/base/label/index'),
        meta: { title: '标签管理', icon: 'table' }
      },{
        path: 'city',
        name: 'City',
        component: () => import('@/views/base/city/index'),
        meta: { title: '城市管理', icon: 'tree' }
      },{
        path: 'enterprise',
        name: 'Enterprise',
        component: () => import('@/views/base/enterprise/index'),
        meta: { title: '公司管理', icon: 'tree' }
      }
    ]
  },
  {
    path: '/gathering',
    component: Layout,
    meta: { title: '活动管理', icon: 'gathering' },
    children: [
      {
        path: 'gathering',
        name: 'Gathering',
        component: () => import('@/views/gathering/index'),
        meta: { title: '活动管理', icon: 'form' }
      }
    ]
  },
  {
    path: '/recruit',
    component: Layout,
    name: 'Recruit',
    meta: { title: '招聘管理', icon: 'nested'},
    children: [
      {
        path: 'recruit',
        component: () => import('@/views/recruit/index'),
        meta: { title: '招聘管理' }
      }
    ]
  },
  {
    path: '/article',
    component: Layout,
    name: 'Article',
    meta: { title: '文章管理', icon: 'nested'},
    children: [
      {
        path: 'channel',
        component: () => import('@/views/article/channel/index'),
        meta: { title: '频道管理' }
      },{
        path: 'column',
        component: () => import('@/views/article/column/index'),
        meta: { title: '专栏审核' }
      },{
        path: 'article',
        component: () => import('@/views/article/article/index'),
        meta: { title: '文章审核' }
      }
    ]
  },
  {
    path: '/usercenter',
    component: Layout,
    name: 'usercenter',
    meta: { title: '用户中心', icon: 'nested'},
    children: [
      {
        path: 'admin',
        name: 'admin',
        component: () => import('@/views/usercenter/admin/index'),
        meta: { title: '管理员列表' }
      },{
        path: 'user',
        name: 'user',
        component: () => import('@/views/usercenter/user/index'),
        meta: { title: '用户列表' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
