// 1.导入express
const express = require('express')
// 2.创建web服务器
const app = express()
// 3.启动web服务器
app.listen(80,()=>{
    console.log('express is running at http://127.0.0.1:80')
})
// 4.获取url中携带的参数
app.get('/',(req,res)=>{
    res.send(req.query)
})
