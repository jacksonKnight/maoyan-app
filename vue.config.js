var data = require('./data.json') //得到api中的数据
var cinema = data.cinema;
module.exports = {
    devServer: {
        before(app) {
            // 在服务器开始创建时声明当前本地服务
            // app代表服s务器,get当前api为get请求,
            app.get('/ele/cinema', function (req, res) {
                res.json({data: cinema});
            });
        },
        proxy: {
            "/movie": {
                target: "https://douban.uieee.com/v2",
                changeOrigin: true,
            }
        }
    }
}