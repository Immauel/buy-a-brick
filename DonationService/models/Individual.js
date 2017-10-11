var restful = require('node-restful');
var bcrypt = require('bcrypt-nodejs');
var mongoose=restful.mongoose;

//Schema

var indSchema = mongoose.Schema({

 		firstName: String,
 		lastName: String,
 		email:{type: String, unique:true, required: true},
 		cellphone:{type: String, unique:true, required: true},
 		homeTown:String,
 		buyEraser: String, 
 		eraserOwner: String,
 		eraserNumber:Number,
 		Bank:String,
 		amount: Number,
 		paymentOption:String,
 		cardNumber:Number,
 		ExpirationDate:Date,
 		SecurtyCode: String
});

module.exports = restful.model('Individual',indSchema,'Individual');