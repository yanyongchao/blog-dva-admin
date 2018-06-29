const menuData = [
  {
    name: '文章管理',
    icon: 'book',
    path: 'article',
    children: [
      {
        name: '文章列表',
        path: 'list'
      },
      {
        name: '添加文章',
        path: 'add'
      }
    ]
  },
  {
    name: '文章分类',
    icon: 'appstore',
    path: 'classification',
    children: [
      {
        name: '全部分类',
        path: 'all'
      },
      {
        name: '添加分类',
        path: 'add'
      }
    ]
  },
  {
    name: '标签管理',
    icon: 'tag-o',
    path: 'category',
    children: [
      {
        name: '全部标签',
        path: 'all'
      },
      {
        name: '添加标签',
        path: 'add'
      }
    ]
  },
  {
    name: '用户信息',
    icon: 'user',
    path:'user'
  }
]

export default menuData
