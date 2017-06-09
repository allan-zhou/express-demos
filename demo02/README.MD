# 路由
路由用于确定应用程序如何响应对特定端点的客户机请求，包含一个 URI（或路径）和一个特定的 HTTP 请求方法（GET、POST 等）。  
每个路由可以具有一个或多个处理程序函数，这些函数在路由匹配时执行。  
路由定义采用以下结构：
```
app.METHOD(PATH, HANDLER)
```
其中：
- app 是 express 的实例。
- METHOD 是 HTTP 请求方法。
- PATH 是服务器上的路径。
- HANDLER 是在路由匹配时执行的函数。

## 路由方法：demo01 | demo02
路由方法派生自 HTTP 方法之一，附加到 express 类的实例。  
有一种特殊路由方法：**app.all()**，它并非派生自 HTTP 方法。该方法用于在所有请求方法的路径中装入中间件函数。


## 路由路径：demo03
路由路径与请求方法相结合，用于定义可以在其中提出请求的端点。路由路径可以是**字符串(strings)**、**字符串模式(string pattern)**或**正则表达式(RegExp)**。

> Express 使用 [path-to-regexp](https://www.npmjs.com/package/path-to-regexp) 来匹配路由路径  

> 查询字符串不是路由路径的一部分。  

### 字符串模式（string pattern）

| pattern | 描述 |
|---|---|
| ? | 匹配前面表达式0次或者1次 |
| + | 匹配前面表达式1次或者多次 |
| * | 匹配任意单个或多个字符 |
| (x)? | 其中，x为任意单个或多个字符，匹配其0次或者1次 |

## 路由处理程序：demo04

## express.Router：demo05