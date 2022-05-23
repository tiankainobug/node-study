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
// 更新数据的快捷方式
const sqlStr = 'UPDATE users SET ? WHERE id =?'
const user = {password:'222222',status:'0',id:6}
db.query(sqlStr,[user,user.id],(err,res)=>{
    if (err) console.log(err.message)
    console.log(res)
})
