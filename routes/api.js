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

router.get('/getUsers',function(req,res){
	
	 
	client.get("http://127.0.0.1:9001/api/users", function (data, response) {
	    res.send(data);
	}).on('error', function (err) {
	    console.error('Something went wrong on the client', err);
	    res.send({
	    	success:false,
	    	message:serviceUnavailable
	    });
	});
});

//=============================================================================================
router.post('/subscribe',function(req,res){
	var args = {
	    data: req.body,
	    headers: { "Content-Type": "application/json" }
	};
	 
	client.post("http://127.0.0.1:9002/api/subscribe", args, function (data, response) {
	    res.send(data);
	}).on('error', function (err) {
	    console.error('Something went wrong on the client', err);
	    res.send({
	    	success:false,
	    	message:serviceUnavailable
	    });
	});
})


router.post('/publishNewsLeter',function(req,res){
	var args = {
	    data: req.body,
	    headers: { "Content-Type": "application/json" }
	};
	 
	client.post("http://127.0.0.1:9002/api/publishNewsLeter", args, function (data, response) {
	    res.send(data);
	}).on('error', function (err) {
	    console.error('Something went wrong on the client', err);
	    res.send({
	    	success:false,
	    	message:serviceUnavailable
	    });
	});
})

router.get('/subs',function(req,res){
	
	 
	client.get("http://127.0.0.1:9002/api/subs", function (data, response) {
	    res.send(data);
	}).on('error', function (err) {
	    console.error('Something went wrong on the client', err);
	    res.send({
	    	success:false,
	    	message:serviceUnavailable
	    });
	});
});


//======================================================================================

//Donations

router.post('/individualDonations',function(req,res){
	
	var args = {
	    data: req.body,
	    headers: { "Content-Type": "application/json" }
	};
	 
	client.post("http://127.0.0.1:9003/api/individualDonations",args, function (data, response) {
	    res.send(data);
	}).on('error', function (err) {
	    console.error('Something went wrong on the client', err);
	    res.send({
	    	success:false,
	    	message:serviceUnavailable
	    });
	});
});

router.post('/companyDonations',function(req,res){
	
	var args = {
	    data: req.body,
	    headers: { "Content-Type": "application/json" }
	};
	 
	client.post("http://127.0.0.1:9003/api/companyDonations",args, function (data, response) {
	    res.send(data);
	}).on('error', function (err) {
	    console.error('Something went wrong on the client', err);
	    res.send({
	    	success:false,
	    	message:serviceUnavailable
	    });
	});
});

router.post('/company2Donations',function(req,res){
	
	var args = {
	    data: req.body,
	    headers: { "Content-Type": "application/json" }
	};
	 
	client.post("http://127.0.0.1:9003/api/company2Donations",args, function (data, response) {
	    res.send(data);
	}).on('error', function (err) {
	    console.error('Something went wrong on the client', err);
	    res.send({
	    	success:false,
	    	message:serviceUnavailable
	    });
	});
});

router.get('/getindividualDonations',function(req,res){
	
	 
	client.get("http://127.0.0.1:9003/api/individualDonations", function (data, response) {
	    res.send(data);
	}).on('error', function (err) {
	    console.error('Something went wrong on the client', err);
	    res.send({
	    	success:false,
	    	message:serviceUnavailable
	    });
	});
});

router.get('/getcompany2Donations',function(req,res){
	
	 
	client.get("http://127.0.0.1:9003/api/company2Donations", function (data, response) {
	    res.send(data);
	}).on('error', function (err) {
	    console.error('Something went wrong on the client', err);
	    res.send({
	    	success:false,
	    	message:serviceUnavailable
	    });
	});
});

router.get('/getcompanyDonations',function(req,res){
	
	 
	client.get("http://127.0.0.1:9003/api/companyDonations", function (data, response) {
	    res.send(data);
	}).on('error', function (err) {
	    console.error('Something went wrong on the client', err);
	    res.send({
	    	success:false,
	    	message:serviceUnavailable
	    });
	});
});


module.exports=router;