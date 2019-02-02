// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from './directive/hasPermission';
import App from './App';

// 引入组件库，这里引入的是iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';

// 引入具有路由与HTTP客户端
import router from './guard/guard.js';
import axios from './guard/httpGuard.js';

// 引入Mock
import Mock from './mock/mock.js';
Mock.setup({
  timeout:"0-300"
})

// 动态生成路由
import { adminMenu, userMenu } from './permission/permission'

Vue.config.productionTip = false
Vue.use(iView)
Vue.prototype.$http = axios;
// axios.defaults.withCredentials = true

let user = JSON.parse(sessionStorage.getItem('user'));
if (user){
  if (user.data.isadmin) {
    router.addRoutes(adminMenu)
  } else {
    router.addRoutes(userMenu)
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
