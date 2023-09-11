export default [
  {
    path: '/',
    name: '主页',
    icon: 'smile',
    component: './Index',
  },
  {
    name: '查看接口',
    icon: 'smile',
    path: '/interface_info/:id',
    component: './InterfaceInfo',
    // routes: [{ path: '/interface_info/:id', component: './InterfaceInfo' },
    //   // { path: '/interface_info/1', component: './InterfaceInfo' }
    // ],
    hideInMenu: true,
  },

  {
    name: '登录',
    path: '/user',
    layout: false,
    routes: [{ path: '/user/login', component: './User/Login' }],
  },
  {
    // name: '注册',
    path: '/user/register',
    layout: false,
    component: './User/Register',
  },
  // { path: '/welcome', name: '欢迎', icon: 'smile', component: './Index' },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        name: '接口管理',
        icon: 'table',
        path: '/admin/interface_info',
        component: './Admin/InterfaceInfo',
      },
      {
        name: '接口分析',
        icon: 'analysis',
        path: '/admin/interface_analysis',
        component: './Admin/InterfaceAnalysis',
      },
    ],
  },

  // { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
