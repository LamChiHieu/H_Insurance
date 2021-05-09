module.exports.index = function(req, res){
    res.render('index')
};

module.exports.add_user = function(req, res){
    res.render('user/add_user');
};

module.exports.update_user = function(req, res){
    res.render('user/update_user');
};