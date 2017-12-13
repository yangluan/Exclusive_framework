/**
 * Created by Best_An_An on 2017/8/10.
 */
//出差申请单
define(function (require,exports,module) {
    var common = require("common");
    var $conn  = require("$conn");
    var application = require("../../../templates/application/application.html");
    require('../../../css/application/application.css');
    var application = Vue.extend({
        template: application,
        data:function(){
            return {

            }
        },
        //页面载入之前执行
        activated:function(){

        },
        //页面离开之后执行
        deactivated:function(){

        },
        methods:{
            wodiu: function () {
                alert('哈哈哈哈')
            }
        },
        computed:{}
    });
    module.exports = application;
});
