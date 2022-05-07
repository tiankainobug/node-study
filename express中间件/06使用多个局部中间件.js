// 导入express
const express = require('express')
// 创建app服务器
const app = express()
// 监听80端口
app.listen(80,()=>{
    console.log('server is running at http://127.0.0.1')
})
// 创建多个中间件
const mw1 = (req,res,next)=>{
    console.log('这是第一个中间件')
    next()
}
const mw2 = (req,res,next)=>{
    console.log('这是第二个中间件')
    next()
}
const mw3 = (req,res,next)=>{
    console.log('这是第三个中间件')
    next()
}
// 注册路由，局部使用中间件
app.get('/home',(req,res)=>{
    res.send('Home page.')
})
app.get('/user',mw1,mw2,(req,res)=>{
    res.send('User page.')
})
app.get('/login',[mw2,mw3],(req,res)=>{
    res.send('Login page.')
})
