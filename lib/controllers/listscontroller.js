var data = require('./datacontroller');

var action = {
	get:function(req, res, next){
		return res.render('lists', {data:data.user});
	}
}

module.exports = action;