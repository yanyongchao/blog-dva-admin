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
    name: '404',
    exact: true,
    component: asyncComponent(app, [], () => import('@/pages/error/404'))
  }
]

export const layoutRouterMap = app => [
  {
    path: '/article/list',
    name: '文章列表',
    exact: true,
    auth: true,
    component: asyncComponent(app, [], () => import('@/pages/article/list'))
  },
  {
    path: '/article/add',
    name: '添加文章',
    exact: true,
    auth: true,
    component: asyncComponent(app, [], () => import('@/pages/article/add'))
  },
  {
    path: '/category/all',
    name: '全部标签',
    exact: true,
    auth: true,
    component: asyncComponent(app, [], () => import('@/pages/category/all'))
  },
  {
    path: '/category/add',
    name: '新建标签',
    exact: true,
    auth: true,
    component: asyncComponent(app, [], () => import('@/pages/category/add'))
  }
]
