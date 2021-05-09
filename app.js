var express = require('express'); //Tạo server
var app = express(); //Tạo app từ server
require('dotenv').config(); // '.env' file môi trường của hệ thống
var path = require('path'); // path: đường dẫn của hệ thống

//kế nối cơ sở dữ liệu
var connection = require('./server/database/connection');

//middleware:
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: false }))

//view engine render html
app.set("view engine", "ejs");

//tạo đường dẫn tới file
app.use(express.static(path.resolve(__dirname,"assets")))

//Link tới file router
var Router = require('./server/routes/router');
app.use('/', Router);

//Mở port
app.listen(process.env.PORT);