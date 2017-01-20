var express = require('express');
var home =  require('../lib/controllers/homecontroller');

var router = express.Router();

//在这里还是死的url
router.get('/index', home.get);

module.exports = router;