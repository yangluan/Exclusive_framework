/**
 * Created by yla on 2017/12/13.
 */
define(function(require, exports, module) {
    var a = '/image/';
    var router = new VueRouter({
        routes: [
            //出差申请单
            {
                path: '/application',
                component: function(resolve) {
                    require.async(['js/modules/application/application.js'], resolve);
                },
                meta: {
                    keepAlive: true
                }
            }
        ]
    });

    var app = new Vue({
        router: router
    }).$mount('#app');

    router.goPath = function(path) {
        window.location.hash = "#" + path;
    };
    Vue.router = router;

});