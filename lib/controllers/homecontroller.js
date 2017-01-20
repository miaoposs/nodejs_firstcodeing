var path = require('path');

var action = {
	get:function(req, res, next){
		//有待转换为模板路径
		//@TODO:path作用:不仅仅只是连接两个字符串，试过了绝对路径，也报错~~
		return res.sendFile(path.join(__dirname, '../../views/index.html'));
	}
}

module.exports = action;