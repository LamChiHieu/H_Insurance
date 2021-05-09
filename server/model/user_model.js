var mongoose = require('mongoose');
var schema = mongoose.Schema

var UserSchema = new schema({
    name: String,
    email: String,
    password: String
});

var User = mongoose.model('User', UserSchema);

module.exports = User;