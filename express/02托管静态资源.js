// 导入express模块
const express = require('express')
const path = require("path");
// 创建web服务器
const app = express()
// 监听80端口
app.listen(80,()=>{
    console.log(path.join(__dirname,'/anli'))
    console.log('express server is running at http://127.0.0.1')
})
app.get('/',(req,res)=>{
    res.send('hello')
})
// 调用app.static对外提供静态资源 路径最好是使用path模块拼接一个绝对路径，否则可能加载不出来
app.use(express.static(path.join(__dirname,'/anli')))
