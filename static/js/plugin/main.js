/**
 * Created by yla on 2017/12/13.
 */
seajs.version = '20171213';

seajs.default = {
    //变量配置
    vars: {
        "locale" : "zh-cn",
        "env" : "dev"
    },
    charset: "utf-8",
    debug : true,
    base : "/static",//request的路径起点
//	base : "../www/static/",//request的路径起点  app 用
    alias : {
        "httpClient" : "js/plugin/httpClient",
        "$conn" : "js/plugin//conn",
        "common" : "js/plugin//common",
    },

    map : [ [ /^(.*\.(?:css|js))\\?(.*)$/i, '$1?_v=' + seajs.version + '&$2' ] ],
};
//seajs.defualt
seajs.config(seajs.default);


function say(o) {
    console && console.log(o);
};