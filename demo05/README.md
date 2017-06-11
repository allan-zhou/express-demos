# 模板引擎
在 Express 可以呈现模板文件之前，必须设置以下应用程序设置：
* views：模板文件所在目录。例如：app.set('views', './views')
* view engine：要使用的模板引擎。例如：app.set('view engine', 'jade')