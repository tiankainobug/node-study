const age = 20

// 向module.exports对象上挂载属性
module.exports.age = age
module.exports.username = 'tiank'
module.exports.sayHello = ()=>{
    console.log('tiank hello')
}
console.log(exports === module.exports)
// 让module.exports指向一个全新的对象
exports = {
    nickname : '小黑',
    sayHi() {
        console.log('Hi')
    }
}
console.log(exports === module.exports)