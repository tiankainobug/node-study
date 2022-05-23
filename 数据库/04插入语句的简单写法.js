// 导入mysql模块
const mysql = require('mysql')
// 和数据库建立连接
const db = mysql.createPool({
    host:'tiankaii.cn',
    port:'3306',
    user:'root',
    password:'Qq133242',
    database:'my_db_01'
})
// 插入语句的简单写法
const user = {username:'man',password:'1234'}
const sqlStr = 'INSERT INTO users SET ?'
db.query(sqlStr,user,(err,res)=>{
    if (err) console.log(err.message)
    console.log(res)
})
