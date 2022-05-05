// 导入http模块
const http = require('http')
// 导入fs模块
const fs = require('fs')
// 导入path模块
const path = require('path')

// 创建web服务器
const server = http.createServer()
// 绑定request事件，监听客户端的请求
server.on('request',(req,res)=>{
    // if (req.url === '/' || req.url === '/index.html'){
        res.setHeader('Content-Type','text/html; charset=utf-8')
        const fpath = path.join(__dirname,req.url)
        console.log(fpath)
        fs.readFile(fpath,'utf8',(err,data)=>{
            if (err) return res.end('<h1>404 Not Find</h1>')
            res.end(data)
        })
    // }

})
server.listen(8081,()=>{
    console.log('server is running at http://127.0.0.1:8081')
})