var path = require('path');
var data = require('./datacontroller');

var action = {
	get:function(req, res, next){
		// return res.send(data.user);
		// return res.sendFile(path.join(__dirname, '../../views/lists.html'));
		return res.render('lists', {data:data.user});
	}
}

module.exports = action;