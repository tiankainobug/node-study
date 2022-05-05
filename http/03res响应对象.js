// 导入http模块
const http = require('http')
// 创建web服务器
const server = http.createServer()
// 绑定request事件，用来监听客户端的请求
server.on('request',(req,res)=>{
    const str = `You request url is ${req.url},and method is ${req.method}`
    res.end(str)
    console.log(str)
})
server.listen(8081,()=>{
    console.log('Server is running at http://127.0.0.1:8081')
})