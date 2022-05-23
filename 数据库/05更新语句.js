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
// 更新数据
const sqlStr = 'UPDATE users SET password=?,status=? WHERE id=?'
const user = {password:'4444',status:'1',id:6}
db.query(sqlStr,[user.password,user.status,user.id],(err,res)=>{
    if (err) console.log(err.message)
    console.log(res)
})
