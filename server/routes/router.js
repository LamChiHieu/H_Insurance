var express = require('express');
var router = express.Router();

var service = require('../services/render')

//Method Get
router.get('/', service.index);
router.get('/add_user', service.add_user);
router.get('/update_user', service.update_user);


module.exports = router;
