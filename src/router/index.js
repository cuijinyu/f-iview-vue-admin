import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login/Login'
import ProjectManage from '@/pages/projectManage/projectManage'
import UserManage from '@/pages/userManage/userManage'
import ManagerInfo from '@/pages/managerInfo/ManagerInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
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
      }]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})

