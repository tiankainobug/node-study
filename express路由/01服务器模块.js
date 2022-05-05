// 1. 导入express模块
const express = require('express')
// 2.导入路由模块
const router = require('./02路由模块')
// 3.创建app服务器
const app = express()
// 4.使用 app.use() 注册路由模块
app.use(router)
// 5.监听80端口
app.listen(80,()=>{
    console.log('server is running at  http://127.0.0.1:80')
})




