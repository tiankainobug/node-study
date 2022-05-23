// 导入mysql模块
const mysql = require('mysql')
// 建立mysql和数据库之间的联系
const db = mysql.createPool({
    host:'tiankaii.cn',
    port:'3306',
    user:'root',
    password:'Qq133242',
    database:'my_db_01'
})
// 查询操作
const sqlStr = 'SELECT * FROM users'
db.query(sqlStr,(err,res)=>{
    if (err) console.log(err.message)
    console.log(res)
})
