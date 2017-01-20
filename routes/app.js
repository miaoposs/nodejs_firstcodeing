var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var route = require('./index');

var app = express();

//post请求解析器（暂且酱紫叫吧~~）
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':true}));

//初始化模板路径
app.set('views', path.join(__dirname, '../views/'));
//设置模板引擎
app.set('view engine', 'ejs');
//应该是加载模板引擎的核心文件之类的吧~~
app.engine('ejs', require('ejs').renderFile);

//路由选择
route(app);

module.exports = app;