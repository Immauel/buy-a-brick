var restful = require('node-restful');
var bcrypt = require('bcrypt-nodejs');
var mongoose=restful.mongoose;

//Schema

var comSchema = mongoose.Schema({
 		name: String,
 		email:{type: String, unique:true, required: true},
 		cellphone:{type: String, unique:true, required: true},
 		buyEraser: String, 
 		eraserOwner: String,
 		eraserOwnerEmail:String,
 		school:String,
 		Employees:[{name:String,cellphone:}],
 		amount: Number,
 		paymentService:String,
 		cardNumber:Number,
 		ExpirationMonth:Number,
 		ExpirationYear:Number,
 		SecurtyCode: String
});

module.exports = restful.model('Company2',compSchema,'Company2');