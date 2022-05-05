// 1.导入express
const express = require('express')
// 2.创建 web服务器
const app = express()
// 3.启动 web服务器
app.listen(80,()=>{
    console.log('express is running at http://127.0.0.1:80')
})
// 4.获取url中的动态参数
app.get('/home/:qy',(req,res)=>{
    res.send(req.params)
})
