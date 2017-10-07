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
 		eraserOwnerEmail:String,
 		school:String,
 		amount: Number,
 		paymentService:String,
 		cardNumber:Number,
 		ExpirationMonth:Number,
 		ExpirationYear:Number,
 		SecurtyCode: String
});

module.exports = restful.model('Individual',indSchema,'Individual');