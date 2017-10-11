//Dependencies

var express= require('express');
var jsonwebtoken= require('jsonwebtoken');
var router = express.Router();
var RabbitMQ = require('rabbitmq-node');
 
var rabbitmq = new RabbitMQ('amqp://localhost');

//Models


var Ind = require('../models/Individual.js');
var Company = require('../models/Companies.js');
var Company2 = require('../models/Company2.js');

//All routes after this middleware are secured
Ind.methods(['get','post']);//white and read only access
Ind.register(router,'/individualDonations');

Company.methods(['get','post']);
Company.register(router,'/companyDonations');

Company2.methods(['get','post']);
Company2.register(router,'/company2Donations');



module.exports=router;