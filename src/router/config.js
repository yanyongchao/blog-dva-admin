import asyncComponent from './asyncComponent'

export const notLayoutRouterMap = app => [
  {
    path: '/login',
    name: '登录',
    exact: true,
    component: asyncComponent(app, ['user'], () => import('@/pages/login'))
  },
  {
    path: '/404',
    name: 'Not Found',
    exact: true,
    component: asyncComponent(app, [], () => import('@/pages/error/404'))
  }
]

export const layoutRouterMap = app => [
  {
    path: '/home',
    name: '主页',
    exact: true,
    component: asyncComponent(app, [], () => import('@/pages/home'))
  },
  {
    path: '/user',
    name: '用户管理',
    exact: true,
    component: asyncComponent(app, [], () => import('@/pages/user'))
  }
]
