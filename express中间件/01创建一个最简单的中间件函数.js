// 1.导入express
const express = require('express')
// 2.创建app服务器
const app = express()
// 3.服务器监听80端口
app.listen(80,()=>{
    console.log('server is running at http://127.0.0.1')
})
// 4.创建中间件
const mw = (req,res,next)=>{
    console.log('this is a simple middleware')
    // 把流转关系 转交给下一个中间件或者路由
    next()
}
