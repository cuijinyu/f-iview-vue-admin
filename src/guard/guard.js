import router from '../router'

router.beforeEach((to, from, next) => {
    let user = sessionStorage.getItem('user');
    if (!user && to.path != '/login') {
        next("/login");
    }
    // if (to.path == '/') {
    //     next("/")
    // }
    next();
});
export default router;