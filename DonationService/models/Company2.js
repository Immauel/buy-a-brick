var restful = require('node-restful');
var bcrypt = require('bcrypt-nodejs');
var mongoose=restful.mongoose;

//Schema

var compSchema = mongoose.Schema({
 		name: String,
 		email:{type: String, unique:true, required: true},
 		cellphone:{type: String, unique:true, required: true},
 		buyEraser: String, 
 		eraserOwner: String,
 		eraserOwnerEmail:String,
 		school:String,
 		Employees:[{name:String,cellphone:String}],
 		amount: Number,
 		paymentService:String,
 		cardNumber:Number,
 		ExpirationMonth:Number,
 		ExpirationYear:Number,
 		SecurtyCode: String
});

module.exports = restful.model('Company2',compSchema,'Company2');