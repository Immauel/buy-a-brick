//Dependencies

var express= require('express');
var jsonwebtoken= require('jsonwebtoken');
var router = express.Router();


//Models


var Sub = require('../models/Sub.js');
var Emailer = require('../models/Emailer.js');


router.get("/test",function(req,res){
    res.send({message: "Ou! yeh reg and auth is working"})
})

router.post("/publishNewsLeter",function(req,res){
	
});

router.post("/subscribe",function(req,res){
	var newSubscriber = new Sub({
		name: req.body.name,
		cellphone:req.body.cellphone,
		email:req.body.email
	});

	newSubscriber.save(function(saved){
		      var email = newSubscriber.email; 

			  Emailer.sendNotification(Emailer.getMailOptions(email,"Subscription Notification",
			    "Hi "+newSubscriber.name+"<br><br>Thank you for subscribing for news letters of Buy a brick charlity!, From now on you will be recieving all news letter regarding charlity."+
			    "<br>Yours<br> Mr. Welldone Goodman"));
	        res.send(saved);
		})

})


Sub.methods(['get','post']);
Sub.register(router,'/subs');





module.exports=router;