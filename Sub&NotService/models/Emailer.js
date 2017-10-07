const nodemailer = require('nodemailer');

module.exports= {

		  getMailOptions: function(reciever,subject,message){
			var mailOptions = {
		        from: '"noreply" <immanuelfransiskus0@gmail.com>', // sender address
		        to: reciever, // list of receivers
		        subject: subject, // Subject line
		        text: message, // plain text body
		        html: '<div>'+message+'</div>' // html body
		    };


			console.log(mailOptions);

			return mailOptions;
		},



		sendNotification: function(mailOptions){

			nodemailer.createTestAccount((err, account) => {

			    // create reusable transporter object using the default SMTP transport
			    let transporter = nodemailer.createTransport({
			        host: 'smtp.gmail.com',
			        port: 587,
			        secure: false, // true for 465, false for other ports
			        auth: {
			            user: "immanuelfransiskus0@gmail.com", // generated ethereal user
			            pass: "aibimano" // 
			        }
			    });

			    // send mail with defined transport object
			    transporter.sendMail(mailOptions, (error, info) => {
			        if (error) {
			            return console.log(error);
			        }
			        console.log('Message sent: %s', info.messageId);
			        // Preview only available when sending through an Ethereal account
			        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

			        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
			        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
			    });
			});
		},

		sendToMany: function(manyEmails,subject,message){
		   manyEmails.forEach(function(e){
		   		console.log(e);
		   		sendNotification(sendNotification(getMailOptions(e,subject,message)));
		   });
		}
}

