var express = require('express');
var app = express();

require('dotenv').config();

var path = require('path');

app.listen(process.env.PORT);

//middleware: parse application/x-www-form-urlencoded: 
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: false }))

//add view engine
app.set("view engine", "ejs");

//load assets
app.use(express.static(path.resolve(__dirname,"assets")))

//routes
var Router = require('./server/routes/router');
app.use('/', Router);

//roues to Admin Page: