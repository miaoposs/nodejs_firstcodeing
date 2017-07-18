//加载模块
var express    = require('express');
var path	   = require('path');
var bodyParser = require('body-parser');

//创建express对象
var server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({'extended':true}));

//处理连接请求
server.get('/', function(req, res){
	return res.send(__dirname);
});

//处理路由
server.get('/index.html', function(req, res){
	return res.sendFile(path.join(__dirname, 'index.html'));
});

server.get('/login.html', function(req, res){
	return res.sendFile(path.join(__dirname, 'login.html'));
});

server.post('/login.html', function(req, res){
	if(req.body.username == 'admin' && req.body.password == 'admin'){
		return res.redirect('/index.html');
	}
});



//可行的拓展，get部分的路径由参数传递进去

server.listen(1337);
console.log('server has been start!');
