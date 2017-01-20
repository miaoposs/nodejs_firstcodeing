var express = require('express');
var lists = require('../lib/controllers/listscontroller');

var router = express.Router();

router.get('/lists', lists.get);

module.exports = router;
