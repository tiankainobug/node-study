const express = require('express')
const app = express()
app.listen(80,()=>{
    console.log('server is running at http://127.0.0.1')
})
// 解析请求表单中url-encoded格式的数据
app.use(express.urlencoded({extended:false}))

app.post('/home',(req,res)=>{
    console.log(req.body)
    res.send('ok')
})
