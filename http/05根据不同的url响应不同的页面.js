// 导入http模块
const http = require('http')
// 创建web服务器
const server = http.createServer()
// 绑定request事件，监听客户端的请求
server.on('request',(req,res)=>{
    // 设置默认提示信息
    let content = '<h1>404 Not Find<h1>'
    // 进行url判断
    if (req.url === '/' || req.url === '/index.html') {
        content = '<h1>欢迎来到首页！<h1>'
    } else if (req.url === '/about.html'){
        content = '<h1>关于页面<h1>'
    }
    // 设置响应头
    res.setHeader('Content-Type','text/html; charset=utf-8')
    res.end(content)
})
// 监听端口
server.listen(8081,()=>{
    console.log('server is running at http://localhost:8081')
})