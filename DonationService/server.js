
var express = require('express');
var mongoose = require("mongoose");
var bodyParser=require("body-parser");


//Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//MongoDB NB: This Address can always be changed to the address of mongodb server
//Remember this database is not secure, in production it must be secured!
mongoose.connect('mongodb://localhost/Donation');// @DonRegAuth = Donation registration and authentication



//Routes
app.use('/api',require('./routes/api.js'));

//Pages
app.use(express.static(__dirname+"/public"));


//Start Server
app.listen(9001);

console.log('Donation service Running at port 9001...');