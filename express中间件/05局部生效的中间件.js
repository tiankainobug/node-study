// 导入express
const express = require('express')
// 创建app服务器
const app = express()
// 监听80端口
app.listen(80,()=>{
    console.log('server is running at http:127.0.0.1')
})
// 创建局部生效的中间件
const mw = (req,res,next)=>{
    console.log('调用了局部生效的中间件')
    next()
}
// 注册路由
app.get('/home',(req,res)=>{
    res.send('home page.')
})
app.get('/user',mw,(req,res)=>{
    res.send('user page')
})
