// 1.导入express
const express = require('express')
// 2.创建 app服务器
const app = express()
// 3.使用 app.listen()来监听端口
app.listen(80,()=>{
    console.log('express is running at http://localhost:80')
})
