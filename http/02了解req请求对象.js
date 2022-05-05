// 导入http模块
const http = require('http')
// 创建web服务器实例
const server = http.createServer()
// 为服务器绑定request事件，监听客户端请求
server.on('request',req => {
    // 请求的url
    const url = req.url
    // 请求的方法
    const method = req.method
    const str = `You request url is ${url},and request method is ${method}`
    console.log(str)
})
server.listen(8081,()=>{
    console.log('server is running at http://127.0.0.1:8081')
})