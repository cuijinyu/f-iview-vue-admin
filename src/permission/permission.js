import router from 'vue-router';
import Home from '@/pages/Home'
import ProjectManage from '@/pages/projectManage/projectManage'
import UserManage from '@/pages/userManage/userManage'
import ManagerInfo from '@/pages/managerInfo/ManagerInfo'

const adminMenu = [{
    path: '/',
    name: 'Home',
    component: Home,
    children:[{
            path: '/projectManage',
            name: 'projectManage',
            component: ProjectManage
        },
        {
            path: '/userManage',
            name: 'userManage',
            component: UserManage
        },
        {
            path: '/managerInfo',
            name: 'managerInfo',
            component: ManagerInfo   
        },
        {
            path: '/userInfo',
            name: 'userInfo',
            component: () => import('../pages/userInfo/userInfo')
        }]
  }];

const userMenu = [{
    path: '/',
    name: 'Home',
    component: Home,
    children:[{
            path: '/userInfo',
            name: 'userInfo',
            component: () => import('../pages/userInfo/userInfo')
    }]
  }];

export { adminMenu, userMenu };