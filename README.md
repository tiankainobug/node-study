# 1.初步认识node.js
## 1.1回顾
### 为什么js可以在游览器中被执行？
> 浏览器中有js解析引擎
> chrome:v8  性能最好
> safri：JSCore
> 。。。

### 为什么js可以操作浏览器的DOM和BOM
每个游览器内置了DOM、BOM这样的API函数。浏览器中的js可以调用他们。
### 浏览器中的js运行环境
浏览器的引擎、内置API
### JS能否做后端开发？
可以，需要借助nodejs
## 1.2Nodejs简介
### 什么是node.js
Node.js是一个基于v8引擎的js`运行环境`
### nodejs中的js运行环境

- 浏览器是js的前端运行环境
- nodejs是js的后端运行环境
- nodejs无法调用DOM和BOM等浏览器内部的API
### node怎么学？
js基础语法+node内置api模块（fs、path、http）+第三方api模块（express、mysql等）
## 1.3nodejs的环境安装
### 区分LTS和current版本

1. LTS：稳定版
1. current：开发版本，存在bug
## 1.4 在nodejs环境中执行js代码

1. 打开终端
1. 输入 `node js目录`
# fs文件系统模块
## 2.1什么是fs文件系统模块
fs模块是node官方提供的、用来操作文件的模块。
```javascript
// 导入
const fs = require('fs')

fs.readFile() //读取文件内容
fs.writeFile() //写入内容
```
## 2.2读取指定文件中的内容
### 1。fs.readFile()格式
```javascript
fs.readFile(path,[encoding],callback)
// 参数1：必选参数，表示文件的路径
// 参数2：可选参数，表示以什么编码格式来读取文件
// 参数3：必选参数，文件读取完成后，通过回调函数拿到读取的结果。
```
### 2。实例代码
```javascript
const fs = require('fs')
fs.readFile('./file/11.txt','utf8',function(err,dataStr){
  console.log(err); // 成功返回null
  console.log(dataStr); // 失败返回undefined
})
```
### 3。判断文件是否读取成功
通过err对象是否为null
```javascript
const fs = require('fs')
fs.readFile('./file/11.txt','utf8',function(err,dataStr){
  if(err){
    return console.log('文件读取失败！'+err.message)
  }
  console.log('文件读取成功，内容是'+dataStr)
})
```
## 2.3向指定的文件中写入内容
### 1。fs.writeFile()的语法格式
```javascript
fs.writeFile(file,data,[encoding],callback)
// 参数1：必选参数，文件存放路径
// 参数2：必选参数，要写入的内容
// 参数3：可选参数，文件编码格式
// 参数4：必选参数，回调函数
```
### 2。示例代码
```javascript
const fs = require('fs')
fs.writeFile('./222.txt','hello,nodejs','utf8',(err)=>{
    console.log(err) //写入成功返回null
})
```
### 3。判断文件是否写入成功
### 4。路径必须存在，且新写入的内容会覆盖之前的旧内容。
## 2.5 练习
读取文件 小红=99 小白=100 小黄=70 小黑=66 小绿=88
写入新文件内容
小红，99
小白，100
小黄，70
小黑，66
小绿，88
```javascript
const fs = require('fs')
fs.readFile('../../day1_all/素材/成绩.txt','utf8',(err,dataStr)=>{
    if (err){
        return console.log('读取成绩文件失败'+err.message)
    }
    const dataArr = dataStr.split(' ')
    const dataNew = []
    dataArr.forEach((item)=>{
        dataNew.push(item.replace('=','，'))
    })
    fs.writeFile('./成绩_ok.txt',dataNew.join('\r\n'),'utf8',(err)=>{
        if (err){
            return console.log(err.message)
        }
        console.log('写入成功！')
    })
})
```
## 2.6 fs模块 - 路径动态拼接的问题
出现路径拼接问题，是因为提供了 ./ 或者 ../ 开头的相对路径
解决方法：
`绝对路径：`移植性差。不利于维护。
**__dirname**：当前文件所处目录
![image.png](https://cdn.nlark.com/yuque/0/2022/png/23126955/1648460682057-f6bec06e-5d57-4526-84ca-5b489d647e01.png#clientId=uec371c48-eb99-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=206&id=ue0ba5548&margin=%5Bobject%20Object%5D&name=image.png&originHeight=206&originWidth=901&originalType=binary&ratio=1&rotation=0&showTitle=false&size=32608&status=done&style=none&taskId=u9ebf4abd-ac12-4ae0-bee5-1f41ef3623f&title=&width=901)
## 3.1 path模块
path模块是node官方提供的、用来处理路径的模块。它提供了一系列的方法和属性。

1. path.join() 用来将多个路径片段拼接成一个完整的路径字符串
1. path.basename() 从路径字符串中，将文件名解析出来
1. path.extname() 获取文件的扩展名
```javascript
const path = require('path')
```
### path.join()代码示例
```javascript
const pathStr = path.join('/a','/b/c','../','d','e')
console.log(pathStr) // 输出 \a\b\d\e

const pathStr2 = path.join(__dirname,'files/1.txt')
console.log(pathStr2) // 输出 当前文件所处目录\files\1.txt
```
> 注意:   ../ 会抵消前面的一层路径

### path.basename()代码实例
```javascript
const fpath = '/a/b/c/index.html'

var fullName = path.basename(fpath)
console.log(fullName) //输出 index.html

var nameWithoutExt = path.basename(fpath,'.html')
console.log(nameWithoutExt) //输出 index
```
### path.extname()代码示例
```javascript
const fpath = '/a/b/c/index.html'

const fext = path.extname(fpath)
console.log(fext) // 输出 .html
```
## 4.http模块
用来创建web服务器的模块 http.createServer()
### 域名
域名服务器（DNS）将域名转化为IP地址。
### 创建web服务器的基本步骤

1. 导入http模块
    1. const http = require('http')
2. 创建web服务器实例
    1. const server = http.createServer()
3. 为服务器实例绑定request事件，监听客户端请求
```javascript
// 使用服务器实例的 .on()方法
server.on('request',(req,res)=>{
  console.log('Someone visit our web server')
})
```
`其中`：

1. req
    1. req是请求对象，它包含了与客户端相关的数据和属性
    1. req.url 是客户端请求的url地址
    1. req.method是客户端的method请求类型
2. res
    1. res是响应对象
    1. res.end(),向客户端发送指定内容
    1. res.setHeader('Content-Type',"text/html; charset=utf-8")   防止响应内容`中文乱码`
4. 启动服务器
```javascript
server.listen(80,()=>{
  console.log('http server running at http://127.0.0.1')
})
```
**案例：**
```javascript
// 导入http模块
const http = require('http')
// 创建web服务器
const server = http.createServer()
// 绑定request事件，监听客户端的请求
server.on('request',(req,res)=>{
    const str = `请求的url为：${req.url},请求的方式为:${req.method}`
    res.setHeader('Content-Type',"text/html; charset=utf-8")
    res.end(str)
})
server.listen(8081,()=>{
    console.log('server is running at http://127.0.0.1:8081')
})
```
### 根据不同的url响应不同的html内容
```javascript
// 导入http模块
const http = require('http')
// 创建web服务器
const server = http.createServer()
// 绑定request事件，监听客户端的请求
server.on('request',(req,res)=>{
    // 设置默认提示信息
    let content = '<h1>404 Not Find<h1>'
    // 进行url判断
    if (req.url === '/' || req.url === '/index.html') {
        content = '<h1>欢迎来到首页！<h1>'
    } else if (req.url === '/about.html'){
        content = '<h1>关于页面<h1>'
    }
    // 设置响应头
    res.setHeader('Content-Type','text/html; charset=utf-8')
    res.end(content)
})
// 监听端口
server.listen(8081,()=>{
    console.log('server is running at http://localhost:8081')
})
```
### 时钟案例
# 模块化
## 优点

1. 提高了代码的复用性
1. 提高了代码的可维护性
1. 实现了按需加载
## 模块化规范
例如：

- 使用什么样的语法格式来引用模块
- 在模块中使用什么样的语法格式向外暴露成员
## 分类

1. 内置模块
    1. 由nodejs官方提供的，例如fs、path、http
2. 自定义模块
    1. 用户自己创建的js文件，都是自定义模块
3. 第三方模块
    1. 由第三方开发出来的模块，使用前需要先下载
## 加载模块
使用`require`方法
```javascript
// 1. 加载内置的fs模块
const fs = require('fs')

// 2. 加载用户自定义模块 可以省略.js后缀
const customer = require('./customer.js')

// 3. 加载第三方模块
const moment = require('moment')
```
> 使用require() 方法加载其他模块时，会执行被加载模块中的代码

## 模块作用域
在自定义模块中定义的变量、方法等成员，`只能在当前模块内被访问`，无法被外界访问。
## module.exports对象
在自定义模块中，可以使用module.exports对象，将模块内的成员共享出去，供外界使用。
`默认为{}`
**案例：**
定义自定义模块
```javascript
const age = 20

// 向module.exports对象上挂载属性
module.exports.age = age
module.exports.username = 'tiank'
module.exports.sayHello = ()=>{
    console.log('tiank hello')
}
```
加载自定义模块
```javascript
const test = require('./02module向外共享test')
console.log(test)
// { username: 'tiank', sayHello: [Function (anonymous)] }
```
**永远以module.exports指向的对象为准**
例如：
定义自定义模块
```javascript
const age = 20

// 向module.exports对象上挂载属性
module.exports.age = age
module.exports.username = 'tiank'
module.exports.sayHello = ()=>{
    console.log('tiank hello')
}
// 让module.exports指向一个全新的对象
module.exports = {
  nickname = '小黑',
  sayHi() {
    console.log('Hi')
  }
}
```
加载自定义模块
```javascript
const test = require('./02module向外共享test')
console.log(test)
// { nickname: '小黑', sayHi: [Function: sayHi] }
```
## exports对象
默认情况下，exports和module.exports指向`同一个对象。`
```javascript
console.log(exports === module.exports)
// true
```
**注意：**
这里只是把exports的指针指向了module.exports，如果更改了exports的指向，那么二者就不再是一个对象，此时require模块得到的是module.exports所指向的对象
例如：
```javascript
const age = 20

// 向module.exports对象上挂载属性
module.exports.age = age
module.exports.username = 'tiank'
module.exports.sayHello = ()=>{
    console.log('tiank hello')
}
console.log(exports === module.exports)  // true

// 不改变指向赋值
exports.name = 'tiank2'
console.log(exports === module.exports)  // true

// 让module.exports指向一个全新的对象
exports = {
    nickname : '小黑',
    sayHi() {
        console.log('Hi')
    }
}
console.log(exports === module.exports)  // false
```
# 包和npm
包是基于内置模块封装出来的，提供了更高级、更方便的API，极大的提高了开发效率
## npm
Node Package Manager（`npm包管理工具`），这个包管理工具随着Node.js的安装包一起安装用户的电脑上。
## 安装指定版本的包
通过`@版本号`
```shell
npm i moment@2.22.2
```
## 包的语义化版本规范
例如：2.24.0

1. 第一位数字：大版本
1. 第二位数字：功能版本
1. 第三位数字：bug修复版本
## 包管理配置文件
在项目根目录中，必须提供一个叫做`package.json`的包管理配置文件。
作用：用来记录项目中安装了哪些包，从而方便剔除node_modules目录之后，在团队成员之间共享项目的源代码。
### 快速创建package.json
```shell
npm init -y
```
运行npm install命令，会自动把包的名称和版本号，记录到package.json文件中。
### dependencies
专门记录安装了哪些包，开发和项目上线之后都会用到
### devDependencies
如果某些包`只在项目开发阶段会用到`，在项目上线后不会用到，那么这些包就记录到devDependencies中。
```shell
// 简写
npm i 包名 -D
// 完整写法
npm install 包名 --save-dev
```
## 一次性安装所有包
npm install
## 卸载包
npm uninstall
```shell
npm uninstall moment
```
卸载的包，会自动从package.json中的dependencies中移除掉。
## 解决下包速度慢
默认从国外的[https://registry.npmjs.org/](https://registry.npmjs.org/)服务器进行下载，会很慢
解决方式：`切换淘宝npm服务器为npm下包镜像源`
```shell
// 查看当前的下包镜像源
npm config get registry
// 将下包的镜像源切换为淘宝镜像源
npm config set registry=https://registry.npm.taobao.org/
```
为了更方便的切换下包镜像源，可以安装**nrm**这个工具
```bash
// 通过npm，将nrm安装为全局可用的工具
npm i nrm -g

// 查看所有可用的镜像源
nrm ls

// 将下包的镜像源切换为 taobao 镜像
nrm user taobao 
```
## 全局包
npm install 如果提供了`-g`参数，则会把包安装为全局包。
注意：
> 判断某个包是否需要全局安装后才能使用，可以参考官方提供的使用说明

## 规范的包结构

1. 必须以单独的目录而存在
1. 包的顶级目录下必须包含package.json这个包管理配置文件
1. package.json中必须包含name、version、main这三个属性，分别代表包的名字、版本号、包的入口
## 开发自己的包
初始化包的基本结构

1. 新建 my 文件夹，作为包的根目录
1. 在 my 文件夹中，新建如下三个文件：
    1. package.json
    1. index.js
    1. README.md
### 初始化package.json
```json
{
  "name": "my",// 包名不能重复
  // 描述信息
  "description": "my pack ,up to me",
  // 数组，搜索的关键词
  "keywords": [
    "moment",
    "date",
    "time",
    "parse",
    "format",
    "validate",
    "i18n",
    "l10n",
    "ender"
  ],
  "main": "./index.js", // 包的入口文件
  // 许可协议
 "license": "ISC",
  "version": "1.0.0" // 版本
}

```
### 编写index.js
编写完，使用module.exports把对应的方法共享出去。
### 编写包的说明文档
README.md，包的使用说明文档。
### 发布包

1. 注册npm账号
    1. [https://www.npmjs.com/](https://www.npmjs.com/)
2. 登录npm账号
    1. 在终端里面输入`npm login`
    1. 输入 账号密码邮箱后，即可登录成功。
    1. **注意**：执行命令之前，必须先把包源切换为npm官方服务器
3. 发布
    1. 切换到包的根目录
    1. 终端里输入`npm publish`
    1. **注意：**包名不能重复
### 删除已发布的包
```bash
npm unpublish 包名 --force
```

1. 只能删除72个小时内发布的包
1. 删除的包在24小时内不允许重复发布
# 模块的加载机制
## 优先从缓冲中加载
模块在第一次加载后会被缓存。提高了模块的加载效率
## 内置模块的加载机制
加载优先级最高
## 自定义模块的加载机制
必须指定以 `./` 或 `../` 开头的路径标识符
如果省略了文件的扩展名，则node.js会按顺序分别尝试加载以下的文件：

1. 按照确切的文件名加载
1. 补全.js扩展名进行加载
1. 补全.json扩展名进行加载
1. 补全.node扩展名进行加载
1. 加载失败 终端报错
## 第三方模块的加载机制
假设在 `'C:\tiank\project\foo.js'`文件调用了`require('tools')`，则Node.js会按照以下顺序查找：

1. C:\tiank\project\node_modules\tools
1. C:\tiank\node_modules\tools
1. C:\node_modules\tools
> 找不到就移动到再上一层父目录中，进行加载，直到文件系统的根目录。

# Express
## 什么是express
专门来创建web服务器的
本质就是一个第三方包，提供了创建服务器的快速方法。和http模块类似。
express是基于http模块疯转出来的。
## express能够做什么

1. 前端程序员：
    1. 方便、快速的创建web网站的服务器或者api接口的服务器
## 安装
在根目录中，运行终端命令
```bash
npm i express@4.17.1
```
## 创建最基本的web服务器
```javascript
// 1.导入express
const express = require('express)
                        
// 2.创建 web服务器
const app = express()

// 3. 调用 app.listen ， 启动服务器
app.listen(80,()=>{
  console.log('express server running at http://127.0.0.1')
})
                   
```
## 监听get请求
```javascript
app.get('请求url',(req,res)=>{})
```
## 监听post请求
```javascript
app.post('请求url',(req,res)=>{})
```
## 给客户端相应内容
res.send()方法
```javascript
app.get('/user',(res,req)=>{
  res.send({name:'zs',age:25})
})
```
## 获取url中携带的参数
req.query
```javascript
// 1.导入express
const express = require('express')
// 2.创建web服务器
const app = express()
// 3.启动web服务器
app.listen(80,()=>{
    console.log('express is running at http://127.0.0.1:80')
})
// 4.获取url中携带的参数
app.get('/',(req,res)=>{
    res.send(req.query)
})
```
## 获取url中的动态参数
req.params
```javascript
// 1.导入express
const express = require('express')
// 2.创建 web服务器
const app = express()
// 3.启动 web服务器
app.listen(80,()=>{
    console.log('express is running at http://127.0.0.1:80')
})
// 4.获取url中的动态参数
app.get('/home/:id',(req,res)=>{
    res.send(req.params) // {"id": "first"}
})

```
注意：

1. `:id`不是固定写法，例如`:qq`也是可以的，最后req.params返回的为`{"qq":"***"}`
1. url也可以是这种格式`/user/:id/:key`，也就是说可以有多个层级，返回的数据类型为`{"id": "77","key": "tiankai"}`
## 托管静态资源
express.static()函数，通过它，可以方便的创建一个静态资源服务器。可以将图片、css文件、JS文件对外开放。
