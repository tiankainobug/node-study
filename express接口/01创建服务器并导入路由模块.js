// 导入express模块
const express = require('express')
// 创建app服务器
const app = express()
// 导入路由模块
const apiRouter = require('./02路由模块')
// 导入中间件，解决解析表单数据
app.use(express.urlencoded({extended:false}))

// 优先创建JSONP 接口，
app.get('/api/jsonp',(req,res)=>{
    // 获取客户端发送的回调函数的名字
    const fun  = req.query.callback
    // 定义要返回的数据
    const data = {name:'zs',age:20}
    // 根据回调函数的名字和定义的数据 ， 拼接成一个字符串
    const str = `${fun}(${JSON.stringify(data)})`
    // 将字符串返回给客户端
    res.send(str)
})

// 导入cors，解决跨域问题
const cors = require('cors')
app.use(cors())

// 引入路由模块
app.use('/api',apiRouter)

// 监听80端口
app.listen(80,()=>{
    console.log('server is running at http://127.0.0.1')
})
