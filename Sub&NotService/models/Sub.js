var restful = require('node-restful');
var bcrypt = require('bcrypt-nodejs');
var mongoose=restful.mongoose;

//Schema

var userSchema = mongoose.Schema({

 		name: String,
 		cellphone: {type: String, unique:true, required: true},
 		email:{type: String, unique:true, required: true}
 		
});


module.exports = restful.model('Sub',userSchema,'Sub');