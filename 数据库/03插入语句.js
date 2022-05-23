// 导入mysql模块
const mysql = require('mysql')
// 建立和数据库之间的连接
const db = mysql.createPool({
    host:'tiankaii.cn',
    port:'3306',
    user:'root',
    password:'Qq133242',
    database:'my_db_01'
})
// 插入语句
const sqlStr = 'INSERT INTO users(username,password) VALUES (?,?)'
const user = {username:'tom',password:'Qq133242'}
// 使用数组形式传递值
db.query(sqlStr,[user.username,user.password],(err,res)=>{
    if (err) console.log(err.message)
    console.log(res)
    // OkPacket {
    //     fieldCount: 0,
    //     affectedRows: 1,
    //     insertId: 5,
    //     serverStatus: 2,
    //     warningCount: 0,
    //     message: '',
    //     protocol41: true,
    //     changedRows: 0
    // }
})
