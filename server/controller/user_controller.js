const { reset } = require('nodemon');
var User = require('../model/user_model');

//Tạo User mới:
module.exports.Create_User = function(req, res){
    
    //Khai báo User mới theo kiểu User được định nghĩa từ lớp user_model
    var user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    //Lưu xuống database
    user
    .save()
    .then(function(result){
        res.send('OK')
    })
    .catch(function(err){
        res.send('Error', err)
    })
};

//Tìm User:
module.exports.Find_User = function(req, res){

    //Nếu req từ Client gửi lên không có tham số thì Find all
    if(req.query.name){

        var name = req.query.name

        User
        .findOne({name: name})
        .then(function(data){
            if(!data){
                res.send('No User')
            }else{
                res.send(data)
            }
        })
        .catch(function(err){
            console.log('Error', err);
        })

    }else {
        
        User
        .find()
        .then(function(data){
            if(!data){
                res.send('No User')
            }else{
                res.send(data)
            }
        })
        .catch(function(err){
            console.log('Error', err)
        })

    }

};

//Chỉnh sửa User:
module.exports.Update_User = function(req,res){

    var id = req.params.id

    User
    .findByIdAndUpdate(id, req.body)
    .then(function(result){
        if(!result){
            res.send('Error. Mayby user not found !!!')
        }else{
            res.send('Update user successfully !!! ')
        }
    })
    .catch(function(err){
        res.send('Error', err)
    })

}

//Xoá User:
module.exports.Delete_User = function(req, res){

    var id = req.params.id

    User
    .findByIdAndDelete(id)
    .then(function(result){
        res.send('Delete user successfully !!!')
    })
    .catch(function(err){
        res.send('Error', err);
    })

}