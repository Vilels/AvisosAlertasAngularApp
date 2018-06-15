// Iniciar Framework
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');
const OAuth2 = require('OAuth2');
const isValid = require("./isValid");
const logger = require("./logger");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var admin = require("firebase-admin");

var tokenFCM = "fyHcK7C4DwE:APA91bFLdFZVGYtWFtD_qvAYUZ22wFCYwqDDab5blSZThZwVsk8ocyfELdPtrDMzvys4ghbsCy6EDEGmwUy_yfYZJfb5JFOSMtO7L2OT6BwiLtpYuf90lptMmD0QhrrC_EC0ax33e1LU";

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "avisosalertastest",
    clientEmail: "firebase-adminsdk-w8huj@avisosalertastest.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC8tZ9ihOxcPor9\nJ4OzvMA3kq1QnP34KmdFLin7Aa13dcevlriln6ltRJmvGYx+51a0K0LqjVBBkwt/\nLZdB6JifoZBj4bK00lCE4+YiRaRDXxJcxGxD/q70H/OYxMcXCfRLrcFdlf4EE2vu\nbA6LM7JdfzWs/0nwkmODghjKnqzzPR9y/i42glz9h5DT1zkd8CFUpAbW5STNsfj0\nZ6fIHvLBaUmld8/2VpHEFNe5iEDLTJUzoeqVHazEn78LXejVUebu9vVPTDzhvh+h\nLM0ABgecVcFzpy6PYlwgfp84C/HUCLEQhVwa/xRd5JHrNDSfI4hObOfc74fr8J0j\nUUqy6k73AgMBAAECggEAALZqltsLxStEFtLCkvO0kueL8zDo1akxMho2QZG3hOag\nJzQ/05N59rPtvn/JIaB5u98YnVKnA3Y94av9mWzHawYXjgS7FvO0WiFxGuM5f9Rt\nI7lV4oVxihQMRly8H3O/gPANbQA9l3ED3bfxIurCQakwxm3sFUlFBdw8KqnVH3xm\nvJh3rsa1wb8gowUHT9noRSND+lT5oSYTPne+MOmtaYcTMG/274MfDZf/K5xkGZZr\nlwdZ2zOV7p/3QFU9tXVElShRcjEz1RmQuUAOxPL9sbZUeWXKoijeNfrdZ5QxgT82\nAq5Kv/Qr8lVzkdMmsZ0b693X0mi3q/3b9kGUxXWoAQKBgQDpGq9zJ21KVZvg5XXh\n7IuOL+HwPTs4Q+ZwHcfw2CHGmiFQDQsgdEklSfZJm5y6vlBbLPrAorbW3bRulUjp\nedljjSbvdal6c6EYYVtV1vfdwrkSjf7Stbo1OHCB2N9TS/dMxiUYTMLVrN7xC6t/\nj8wzYUMVVr3LLtRbC4e4wlCFSQKBgQDPPqXkHfyFfnRBknNXqYLLTcpQQg6nToOu\nEeD2z5LEbJH99kP0douY+ozv5uztG3tIzYqpg2SPM5OUkOIOxaH9As/P8WDw4EDv\nXwKMdq69QrDEJPgNARGzIfoPzy0nP5pvkyqlnsyfr5NiLHGM0gcfgNr44lNyWZhx\nspraGsdyPwKBgADKJFoBgi9ERvjmDhYr1PUwWFWV/4NbR4aNs0Wvlb20e/Rndugv\nPKgxrfHl4wwG5QLKDjdk1bW4nonZW5ve28uoiL866M4PYjZQ7hxGVCSeKj5T2M8h\n6nWPsWHfODJyCW5rJWkFqYtLwJ2UaopOFGUAKVgDKTVs/S8pxNXtYpRxAoGBAKIu\nvbXaPZ7eie4yxK7qid+9/cB3IW6Ow//6H9omMQ4khM+A5EcwaiiKkra/OdSIOB+O\nMqBbodtrGmgeRboXsaAFjkmF9T4r0MVCzgTMcAzOXvTwlWnf11EfGsk6cXSQkrQU\nMECyGCIzTZx7eVUhm89skHBK9dC8Cs+XXRWn9UMTAoGBANqwj2XLL0wAmpk08OpF\ntSeXFMOqekgx1R+OxRTKtkIN3x6KR75Z0gwOmZNUTusuMWOygLx3T+7bKJ5ydUOr\nGsRac45hVG214ur93lUisnC8+PF9nQfO7Sze2oyr+qoU3SuQS6AvR4XTiWQrKQ/T\nY+233EkmC/RCO+nJV6JyE+Nx\n-----END PRIVATE KEY-----\n"
  }),
  databaseURL: "https://avisosalertastest.firebaseio.com"
});

//const smtpTransport = require('nodemailer-smtp-transport');

//Iniciar Servidor
app.listen(8000, () => {
  console.log('Server started! on port 8000');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.all("*", (req, res, next) => {
    logger.info("Incoming request", {method: req.method});

    logger.debug("Incoming request verbose", {
        headers: req.headers,
        query:req.query,
        body: req.body
    });
    return next();
});

app.route('/test').get((req, res)=>{
    console.log("TEST COM SUCESSO!");
    res.send("Hello World");
})

app.route('/mail').post((req,res) =>{
    var recipient = req.body.for;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: 'vilels4dev@gmail.com',
            clientId: '40455889206-7o58s3rsa3bdd4juspo826uttp309i0f.apps.googleusercontent.com',
            clientSecret: 'pccv2sqEG-moIXYlQcFkdSVp',
            refreshToken: '1/iWkLh5-zzPtcMgOnc-rPOQYU0E5JMF4LZbF87YYm8f4',
            accessToken: 'ya29.GlzTBWIwbRB61QlcDfXokt09MEqt9TlmWOq_PSCqY6G3PreZb5t1JzSli84iH81bwjWlsKQNANozk2mMNdcMYVL1IaaCZPfc5EL54rKmAt77L8WSTvUrsr3bi64dSQ',
          },
    });
    
    var mailOptions = {
        from: 'CGI',
        to: recipient,
        subject: 'Nodemailer Test',
        text: 'Hello World!'
    }
    
    transporter.sendMail(mailOptions, function(err, res){
        if (err){
            console.log(err);
        } else {
            console.log('Email Sent');
        }
    })

    res.send("Email Enviado com sucesso para: " + recipient);
});

app.route('/notification').post((req, res)=>{
    // This registration token comes from the client FCM SDKs.
    var registrationToken = tokenFCM;
    var reqTitle = req.body.title;
    var reqBody = req.body.body;

    // See documentation on defining a message payload.
    var message = {
        data: {
            body : reqBody,
            title: reqTitle,
            key_1: "Key_1 do objeto data",
            key_2: "Key_2 do objeto data",
            click_action: "com.example.vilels.avisosalertastest_TARGET_NOTIFICATION"
        },
    token: registrationToken
    };

    // Send a message to the device corresponding to the provided
    // registration token.
    admin.messaging().send(message)
    .then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent notification:', response);
    })
    .catch((error) => {
        console.log('Error sending notification:', error);
    });
    
    res.send("Notificação enviada!");
});

app.route('/request').post((req, res)=>{
    console.log("REQUEST COM SUCESSO!");
    var emailReq = req.body.email;
    res.send(emailReq);
});

//ENDPOINT NOTIFICATION + EMAIL
app.route('/alert').post((req, res)=>{
    logger.info("/ query", {query: req.query});
    var reqTitle = req.body.title;
    var reqBody = req.body.body;
    //notificationg message data
    var message = {
        data: {
            body : reqBody,
            title: reqTitle,
            key_1: "Key_1 do objeto data",
            key_2: "Key_2 do objeto data",
            click_action: "com.example.vilels.avisosalertastest_TARGET_NOTIFICATION"
        },
    token: tokenFCM,
    };
    //email transporter
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: 'vilels4dev@gmail.com',
            clientId: '40455889206-7o58s3rsa3bdd4juspo826uttp309i0f.apps.googleusercontent.com',
            clientSecret: 'pccv2sqEG-moIXYlQcFkdSVp',
            refreshToken: '1/iWkLh5-zzPtcMgOnc-rPOQYU0E5JMF4LZbF87YYm8f4',
            accessToken: 'ya29.GlzbBSuX9ybF4It6KQwokygAHXKPTHeEZbdZ0A02NpeCr7q7pL9PNLKza0jxKA5EoOOycb5WNs4NC5VohDd99BBq2n0x5aHnSlVmgLFjLILAJQQzdjxXGkDjgw9fDw',
          },
    });
    //conteudo do email
    var mailOptions = {
        from: 'CGI',
        to: 'pedrofilipevilela96@gmail.com',
        subject: reqTitle,
        text: reqBody
    }

    //Envio da notificação
    admin.messaging().send(message)
    .then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent notification:', response);
    })
    .catch((error) => {
        console.log('Error sending notification:', error);
    });

    //Envio do email
    transporter.sendMail(mailOptions, function(err, res){
        if (err){
            console.log(err);
        } else {
            console.log('Email Sent');
        }
    })

    logger.info("/ response", reqBody);
    //Resposta do endpoint
    res.send("Conteudo Enviado Com Sucesso:" + reqBody);
});