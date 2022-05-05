// 导入http模块
const http = require('http')
// 创建web服务器
const server = http.createServer()
// 绑定request事件，监听客户端的请求
server.on('request',(req,res)=>{
    const str = `请求的url为：${req.url},请求的方式为:${req.method}`
    res.setHeader('Content-Type',"text/html; charset=utf-8")
    res.end(str)
})
server.listen(8081,()=>{
    console.log('server is running at http://127.0.0.1:8081')
})