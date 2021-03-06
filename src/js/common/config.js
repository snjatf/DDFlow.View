layui.use(['layer'], function() {
    var $ = layui.$;
    $.extend({
        config: {
            version: "pro",
            pro: {
                apis: {
                    process: "http://10.0.1.95:9009/api",
                    form: "http://10.0.1.95:9007/api",
                    object: "http://10.0.1.95:9008/api",
                }
            },
            dev: {
                apis: {
                    process: "http://localhost:9009/api",
                    form: "http://localhost:9007/api",
                    object: "http://localhost:9008/api",
                }
            },
            online: {
                apis: {
                    process: "http://10.0.0.60:9009/api",
                    form: "http://10.0.0.60:9007/api",
                    object: "http://10.0.0.60:9008/api",
                }
            },
            online2: {
                apis: {
                    process: "http://10.0.0.194:9009/api",
                    form: "http://10.0.0.194:9007/api",
                    object: "http://10.0.0.194:9008/api",
                }
            },
        },
        getConfig: function() {
            return $.config[$.config.version];
        }
    });
});