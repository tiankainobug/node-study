// 导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

// 创建get接口
router.get('/user',(req,res)=>{
    // 获取请求参数
    const query = req.query
    res.send({
        status:0,
        msg:'GET请求成功！',
        data:query
    })
})

// 创建post接口
router.post('/home',(req,res)=>{
    // 获取客户端请求体中的内容
    const body = req.body
    res.send({
        status:0,
        msg:'POST 请求成功！',
        data:body
    })
})

// 暴露路由对象
module.exports = router
