
var express = require('express');
var mongoose = require("mongoose");
var bodyParser=require("body-parser");

var RabbitMQ = require('rabbitmq-node');
 
var rabbitmq = new RabbitMQ('amqp://localhost');

var Emailer = require('./models/Emailer.js');


//Emailer.sendNotification(Emailer.getMailOptions("immanuel@rimnamibia.com.na","test","Just tesing."))


//Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//MongoDB NB: This Address can always be changed to the address of mongodb server
//Remember this database is not secure, in production it must be secured!
mongoose.connect('mongodb://localhost/DonSubNot');



//var emails = ["kamatitangenisks@gmail.com","frentendamaseb90@gmail.com"];
rabbitmq.subscribe('Users');

rabbitmq.on('message', function(message) {
  var data = message.data;
  Emailer.sendNotification(Emailer.getMailOptions(data.email,"Sign Up Notification",
  	"Dear "+data.lastName+"<br>Your account is set up as "+data.role));

});
 
rabbitmq.on('error', function(err) {
  console.error(err);
});
 
rabbitmq.on('logs', function(print_log) {
  console.info(print_log);
});
 









//Routes
app.use('/api',require('./routes/api.js'));

//Pages
app.use(express.static(__dirname+"/public"));


//Start Server
app.listen(9002);

console.log('Subscription and Notification Service Running at port 9002...');