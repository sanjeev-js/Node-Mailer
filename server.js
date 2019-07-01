var dotenv  = require("dotenv")
dotenv.config();

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.user,
    pass: process.env.pass
  }
});

var mailOptions = {
  from: process.env.user,
  to: 'Reciever mail address',
  subject: 'Sending Email using Node.js',
  text: 'That was easy! I enjoyed Very much'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
