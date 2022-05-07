// 导入express
const express = require('express')
// 创建app服务器
const app = express()
// 监听80端口
app.listen(80,()=>{
    console.log('server is running at http://127.0.0.1')
})
// 注册路由
app.get('/user',(req,res)=>{
    throw new Error('服务器内部错误！')
    res.send('user page')
})
// 错误级别的中间件
app.use((err,req,res,next)=>{
    res.send('Error:'+err.message)
})
