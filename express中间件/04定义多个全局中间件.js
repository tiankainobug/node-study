// 导入express
const express = require('express')
// 创建app服务器
const app = express()
// 监听80端口
app.listen(80,()=>{
    console.log('server is running at http://127.0.0.1')
})
// 创建多个全局中间件
app.use((req,res,next)=>{
    console.log('fist middleware.')
    next()
})
app.use((req,res,next)=>{
    console.log('second middleware')
    next()
})
// 注册路由
app.get('/home',(req,res)=>{
    console.log('home page')
    res.send('Home Page!')
})

