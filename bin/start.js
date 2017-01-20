var app = require('../lib/app');

var port = '3333';

//开始监听
var server = app.listen(port, function(){
	console.log('http server listening port on %s', server.address().port);
});
