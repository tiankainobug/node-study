// 导入http模块
const http = require('http')
// 创建web服务器实例
const server = http.createServer()
// 为服务器绑定request事件，监听客户端请求
server.on('request',(req,res)=>{
    console.log('有人访问了80端口')
})
// 启动服务器
server.listen(80,()=>{
    console.log('80端口启动了')
})