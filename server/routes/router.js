var express = require('express');
var router = express.Router();

var service = require('../services/user_render')
var user = require('../controller/user_controller');

//Trang chủ:
router.get('/', function(req, res){
    res.render('index');
});


//User - Phương thức GET
router.get('/add_user', service.add_user);
router.get('/update_user', service.update_user);

//User - API
router.post('/api/user', user.Create_User);
router.get('/api/user', user.Find_User);
router.put('/api/user/:id', user.Update_User);
router.delete('/api/user/:id', user.Delete_User);


module.exports = router;
