import router from '../router'
router.beforeEach((to, from, next) => {
    let user = sessionStorage.getItem('user');
    if (!user && to.path != '/login') {
        next("/login");
    } else {
        next();
    }
    if (to.path == '/') {
        next("/managerInfo")
    }
    next();
});
export default router;