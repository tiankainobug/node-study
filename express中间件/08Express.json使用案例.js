// 导入express
const express = require('express')
// 创建app服务器
const app = express()
// 监听80端口
app.listen(80,()=>{
    console.log('server is running at http://127.0.0.1')
})
// 调用express.json中间件
app.use(express.json())

// 注册路由
app.post('/user',(req,res)=>{
    // 默认情况下，可以使用req.body来接受客户端发送的请求体数据
    // 但是如果不配置解析表单数据的中间件，则req.body为undefined
    console.log(req.body)
    res.send('ok')
})
