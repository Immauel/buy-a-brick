var restful = require('node-restful');
var bcrypt = require('bcrypt-nodejs');
var mongoose=restful.mongoose;

//Schema

var compSchema = mongoose.Schema({
 		name: String,
 		country:String,
 		email:{type: String, unique:true, required: true},
 		cellphone:{type: String, unique:true, required: true},
 		buyEraser: String, 
 		eraserNumber: Number,
 		city: String,
 		Bank:String,
 		amount:String,
 		cardNumber: Number,
 		paymentOption:String,
 		cardNumber:Number,
 		ExpirationDate:Date,
 		SecurtyCode: String
});

module.exports = restful.model('Company',compSchema,'Company');