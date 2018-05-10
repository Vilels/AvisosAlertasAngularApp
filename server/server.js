// Iniciar Framework
const express = require('express');
var cors = require('cors')
const app = express();

const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

//Iniciar Servidor
app.listen(8000, () => {
  console.log('Server started! on port 8000');
});

app.use(cors());

app.post('/mail', function(req,res){

   nodemailer.createTestAccount((err, account,) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: account.user, // generated ethereal user
            pass: account.pass // generated ethereal password
        },
        tls: {
        	rejectUnauthorized: false
    }
    });

    /*let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: 'pedrofilipevilela96@gmail.com',
        accessToken: 'ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x'
    },
    tls: {
         	rejectUnauthorized: false
     }
});*/
    // setup email data with unicode symbols
    var message = req.body;
    let mailOptions = {
        from: 'pedrofilipevilela96@gmail.com', // sender address
        to: 'pedrofilipevilela96@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'some random text', // plain text body
        html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});
});//end of app.post()


app.route('/api/cats').get((req, res) => {
  res.send({
    cats: [{ name: 'lilly' }, { name: 'lucy2' }]
  });
});
