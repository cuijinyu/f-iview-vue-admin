import Vue from 'vue';
Vue.directive('hasPermission', {
    inserted:function (el, binding, vnode) {
        console.log(el);
        console.log(binding);
        console.log(vnode);
    }
})
export default Vue;