# express
- 路由
- 中间件
- 静态文件
- 模板引擎
- 数据库集成
- express应用生成器

# 路由
路由是由一个 URI、HTTP 请求（GET、POST等）和若干个句柄组成

路由的结构如下：
```
app.METHOD(path, [callback...], callback)
```
其中，app 是 express 对象的一个实例， METHOD 是一个 HTTP 请求方法， path 是服务器上的路径， callback 是当路由匹配时要执行的函数。


# demos
- demo01: hello world
- demo02: 路由 route
- demo03: express应用生成器
- demo04: 中间件 midlleware