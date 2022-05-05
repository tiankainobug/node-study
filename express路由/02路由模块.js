// 1.导入express
const express = require('express')
// 2.创建路由对象
const router = express.Router()
// 3.挂载具体的路由
router.get('/user',(req,res)=>{
    res.send('user')
})
router.post('/login',(req,res)=>{
    res.send('login')
})
// 4.向外到处路由对象
module.exports = router

