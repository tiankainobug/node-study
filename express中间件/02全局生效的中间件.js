// 1.导入express模块
const express = require('express')
// 2.创建app服务器
const app = express()
// 3.监听80端口
app.listen(80,()=>{
    console.log('server is running at http://127.0.0.1')
})
// 4.创建一个中间件
const mw = (req,res,next)=>{
    console.log('这是一个全局中间件')
    next()
}
// 5.将创建的中间件mw注册为全局中间件
app.use(mw)
// 注册路由
app.get('/home',(req,res)=>{
    console.log('home page')
    res.send('Home Page.')
})
app.get('/user',(req,res)=>{
    console.log('user page')
    res.send('User Page.')
})

