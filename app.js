var express = require('express');
var app = express();
var bodyparser = require('body-parser');
app.listen(3000);

//middleware: parse application/x-www-form-urlencoded: 
app.use(bodyParser.urlencoded({ extended: false }));

//add view engine
app.set("view engine", "ejs");


app.get('/', function(req,res){
    res.send('Home123')
});