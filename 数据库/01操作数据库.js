// 导入mysql模块
const mysql = require('mysql')
// 建立mysql与数据库之间的联系
const db = mysql.createPool({
    host:'tiankaii.cn',
    port:'3306',
    user:'root',
    password:'Qq133242',
    database:'my_db_01'
})
// 测试mysql模块能否正常工作
db.query('select 1',(err,msg)=>{
    if (err) return console.log(err)
    console.log(msg)
})
