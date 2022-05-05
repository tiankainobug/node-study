// 1.导入express
const express = require('express')
// 2.创建 web服务器
const app = express()
// 3.启动 web服务器
app.listen(80,()=>{
    console.log('express is running at http://localhost:80')
})
// 4.监听get和post请求，并且给客户端相应数据
app.get('/user',(req,res)=>{
    res.send({name:'周杰',age:25})
})
app.post('/home',(req,res)=>{
    res.send({name:'周杰伦',age:26})
})
