// 导入express
const express = require('express')
// 创建app服务器
const app = express()
// 监听80端口
app.listen(80,()=>{
    console.log('server is running at http://127.0.0.1')
})
// 创建全局生效的中间件
app.use((req,res,next)=>{
    const now = Date.now()
    req.startTime = now
    next()
})
// 注册路由
app.get('/home',(req,res)=>{
    res.send('Home page : '+req.startTime)
})
app.get('/user',(req,res)=>{
    res.send('User page : '+req.startTime)
})
