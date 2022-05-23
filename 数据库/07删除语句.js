// 导入mysql
const mysql = require('mysql')
// 和数据库建立连接
const db = mysql.createPool({
    host:'tiankaii.cn',
    port:'3306',
    user:'root',
    password:'Qq133242',
    database:'my_db_01'
})
// 删除数据
db.query('DELETE FROM users WHERE id = ?',6,(err,res)=>{
    if (err) console.log(err.message)
    console.log(res)
})
