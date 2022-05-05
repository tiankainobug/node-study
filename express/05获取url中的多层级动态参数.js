const express = require('express')
const app = express()
app.listen(80,()=>{
    console.log('express is running at http://127.0.0.1:80')
})

app.get('/user/:id/:name',(req,res)=>{
    res.send(req.params) // 返回的数据类型为 {"id": "77","name": "tiankai"}
})
