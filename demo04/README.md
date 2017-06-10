# 中间件 middleware
中间件函数能够访问请求对象 (req)、响应对象 (res) 以及应用程序的请求/响应循环中的下一个中间件函数。下一个中间件函数通常由名为 next 的变量来表示。  
中间件函数可以执行以下任务：  
* 执行任何代码。
* 对请求和响应对象进行更改。
* 结束请求/响应循环。
* 调用堆栈中的下一个中间件  
![](../assets/express-mw.png)  

Express 应用程序可以使用以下类型的中间件：  
* [应用层中间件](#应用层中间件) mw02.js | mw03.js    
* [路由器层中间件](#路由器层中间件)  
* [错误处理中间件](#错误处理中间件) demo02/route07.js
* [内置中间件](#内置中间件) mw04.js
* [第三方中间件](#第三方中间件)

## 应用层中间件
使用 app.use() 和 app.METHOD() 函数将应用层中间件绑定到应用程序对象的实例

## 路由器层中间件

路由器层中间件的工作方式与应用层中间件基本相同，差异之处在于它绑定到 express.Router() 的实例。  
```
var router = express.Router();
```
使用 router.use() 和 router.METHOD() 函数装入路由器层中间件

## 错误处理中间件
> 错误处理中间件始终采用**四个自变量**。必须提供四个自变量，以将函数标识为错误处理中间件函数。即使无需使用 next 对象，也必须指定该对象以保持特征符的有效性。否则，next 对象将被解释为常规中间件，从而无法处理错误。  

错误处理中间件函数的定义方式与其他中间件函数基本相同，差别在于错误处理函数有四个自变量而不是三个，专门具有特征符 (err, req, res, next)：
```
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```
## 内置中间件
自 V4.x 起，Express 不再依赖于 Connect。除 express.static 外，先前 Express 随附的所有中间件函数现在以单独模块的形式提供。
```
express.static(root, [options])
```
Express 中唯一内置的中间件函数是 express.static。此函数基于 serve-static，负责提供 Express 应用程序的静态资源。

## 第三方中间件
使用第三方中间件向 Express 应用程序添加功能。
```
$ npm install cookie-parser
```

```
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

// load the cookie-parsing middleware
app.use(cookieParser());

```