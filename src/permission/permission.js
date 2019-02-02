const adminMenu = [{
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
    children:[{
            path: '/projectManage',
            name: 'projectManage',
            component: () => import('../pages/projectManage/projectManage')
        },
        {
            path: '/userManage',
            name: 'userManage',
            component: () => import('../pages/userManage/userManage')
        },
        {
            path: '/managerInfo',
            name: 'managerInfo',
            component: () => import('../pages/managerInfo/ManagerInfo')
        },
        {
            path: '/userInfo',
            name: 'userInfo',
            component: () => import('../pages/userInfo/userInfo')
        }]
  },
  {
    path: '*',
    name: '404',
    component: () => import('../pages/404.vue')
  }];

const userMenu = [{
    path: '/',
    name: 'Home',
    componentPath: '../pages/Home.vue',
    children:[{
            path: '/userInfo',
            name: 'userInfo',
            component: () => import('../pages/userInfo/userInfo')
    }]
  },
  {
    path: '*',
    name: '404',
    component: () => import('../pages/404.vue')
}];

const generateRoutes = (menu, router) => {
    if(menu instanceof Array){
        menu.forEach(menuItem => {
            menuItem.component = () => import(menuItem.componentPath)
            if (menuItem.hasOwnProperty('children')) {
                generateRoutes(menuItem.children)
            }
        });
    } else {
        menu.component =  () => import(menuItem.componentPath)
        if (menu.hasOwnProperty('children')) {
            generateRoutes(menu.children)
        }
    }
    return menu;
}

export { adminMenu, userMenu, generateRoutes };