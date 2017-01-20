var homeRoute = require('./homeRoute');
var listsRoute = require('./listsRoute');

module.exports = function(app){
	app.use(homeRoute);
	app.use(listsRoute);
}