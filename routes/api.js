var express= require('express');
var router = express.Router();

var Client = require('node-rest-client').Client;

var client = new Client();

var serviceUnavailable = "This service is temporary unavailable, Try again later!";
//============================================================================================

//routes Authentication service
router.post('/authenticate', function(req,res){
	var args = {
	    data: req.body,
	    headers: { "Content-Type": "application/json" }
	};
	 
	client.post("http://127.0.0.1:9001/api/login", args, function (data, response) {
	    res.send(data);
	}).on('error', function (err) {
	    console.error('Something went wrong on the client', err);
	    res.send({
	    	success:false,
	    	message:serviceUnavailable
	    });
	});
});

router.post('/addUser',function(req,res){
	var args = {
	    data: req.body,
	    headers: { "Content-Type": "application/json" }
	};
	 
	client.post("http://127.0.0.1:9001/api/signup", args, function (data, response) {
	    res.send(data);
	}).on('error', function (err) {
	    console.error('Something went wrong on the client', err);
	    res.send({
	    	success:false,
	    	message:serviceUnavailable
	    });
	});
})


router.get('/testapi',function(req,res){
	res.send({message:"Ma men the api is working!"})
});

module.exports=router;