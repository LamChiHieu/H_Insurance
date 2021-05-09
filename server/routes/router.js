var express = require('express');
var router = express.Router();

//Render to these Pages:
router.get('/', function(req, res){
    res.render('index');
})

router.get('/login', function(req, res){
    res.render('login');
});

router.get('/add_user', function(req, res){
    res.render('user/add_user');
});

router.get('/list_user', function(req, res){
    res.render('user/list_user');
});


module.exports = router;
