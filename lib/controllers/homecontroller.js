var path = require('path');

var action = {
	get:function(req, res, next){
		//有待转换为模板路径
		//@TODO:path模板的作用
		return res.sendFile(path.join(__dirname, '../../views/index.html'));
	}
}

module.exports = action;