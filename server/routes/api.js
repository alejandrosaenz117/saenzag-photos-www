const express = require('express');
const router = express.Router();
const fs = require('fs')
var path = require('path');
const nodemailer = require('nodemailer')
const config = require('../../config');
const app = express()
const onHeaders = require('on-headers')
const request = require('request');
const bodyParser = require('body-parser')

const assets = path.join(__dirname, '..','..','src', 'assets');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* GET api listing. */
router.get('/', (req, res) => {
  scrubHeaders(res)
});

function extension(element) {
  var extName = path.extname(element);
  return extName === '.' + 'DS_Store'; 
};
router.get('/gallery_landscape', (req, res) => {
  scrubHeaders(res)
  //maybe take in a string to determine which gallery will get returned
  images = [];
  fs.readdirSync(assets + '/gallery_landscape').forEach(file => {
      images.push('../../assets/gallery_landscape/' + file)
  })
  //Removes .DS_Store
  images = images.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
  res.status(200).json(images)
})

router.get('/gallery_film', (req, res) => {
  scrubHeaders(res)
  //maybe take in a string to determine which gallery will get returned
  images = [];
  fs.readdirSync(assets + '/gallery_film').forEach(file => {
      images.push('../../assets/gallery_film/' + file)
  })
  //Removes .DS_Store
  images = images.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
  res.status(200).json(images)
})

router.get('/gallery_maternity', (req, res) => {
  scrubHeaders(res)
  //maybe take in a string to determine which gallery will get returned
  images = [];
  fs.readdirSync(assets + '/gallery_maternity').forEach(file => {
      images.push('../../assets/gallery_maternity/' + file)
  })
  //Removes .DS_Store
  images = images.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
  res.status(200).json(images)
})

router.get('/gallery_night_colors', (req, res) => {
  scrubHeaders(res)
  //maybe take in a string to determine which gallery will get returned
  images = [];
  fs.readdirSync(assets + '/gallery_night_colors').forEach(file => {
      images.push('../../assets/gallery_night_colors/' + file)
  })
  //Removes .DS_Store
  images = images.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
  res.status(200).json(images)
})

router.get('/gallery_family_portraits', (req, res) => {
  scrubHeaders(res)
  //maybe take in a string to determine which gallery will get returned
  images = [];
  fs.readdirSync(assets + '/gallery_family_portraits').forEach(file => {
      images.push('../../assets/gallery_family_portraits/' + file)
  })
  //Removes .DS_Store
  images = images.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
  res.status(200).json(images)
})

router.get('/couple_engagement', (req, res) => {
  scrubHeaders(res)
  images = [];
  fs.readdirSync(assets + '/proserv/couple-engagement').forEach(file => {
      images.push('../../assets/proserv/couple-engagement/' + file)
  })
  //Removes .DS_Store
  images = images.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
  res.status(200).json(images)
})

router.post('/contactFormSubmit', function(req, res){
    const gRecaptchaResponseValue = req.body.captcha
    var secretKey = config.recaptcha.secret_key_dev;
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${gRecaptchaResponseValue}&remoteip=${req.connection.remoteAddress}`;
    request(verifyUrl, (err, response, body) => {
      body = JSON.parse(body)
      if(body.success !== undefined && !body.success){
        return res.json({"error": false, "msg":"Failed captcha verification"});
      }
      else if(body.success !== undefined && body.success) {
        console.log("Success captcha verification")
        var transporter = nodemailer.createTransport({
          service: "Gmail",
          auth: {
              user: config.gmail.user_name,
              pass: config.gmail.password
          }
        })
        var mailOptions = {
          from: config.gmail.from,
          to: config.gmail.mailTo,
          subject: 'New Contact Form Submission from ' + req.body.firstName + ' ' + req.body.lastName, // Subject line
          text: `From: ${req.body.firstName} ${req.body.lastName}\nEmail: ${req.body.email}\nSubject: ${req.body.subject}\nMessage: ${req.body.message}`
        }
        transporter.sendMail(mailOptions, function(error, info){
          if(error){
              res.json({error: 'Error sending email'});
          }else{
              scrubHeaders(res)
              res.json({success: 'Email sent successfully'});
          };
        })
      } 
    });
})

router.post('/corpEventFormSubmit', function(req, res){
  scrubHeaders(res)
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: config.gmail.user_name,
        pass: config.gmail.password
    }
  })
  var mailOptions = {
    from: config.gmail.from,
    to: config.gmail.mailTo,
    subject: 'New Corporate Event Form Submission from ' + req.body.firstName + ' ' + req.body.lastName, // Subject line
    text:  `From: ${req.body.firstName} ${req.body.lastName}
          \nEmail: ${req.body.email}
          \nSubject: ${req.body.phone}
          \nEvent Title: ${req.body.eventTitle}
          \nStart Date: ${req.body.startDate}
          \nEnd Date: ${req.body.endDate}
          \nWebsite: ${req.body.website}
          \nAdditional Info: ${req.body.additionalInfo}`
  }
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        res.json({yo: 'error'});
    }else{
        res.json({yo: info.response});
    };
  })
})

function scrubHeaders(res) {
  onHeaders(res, function () {
    this.removeHeader('ETag')
    this.removeHeader('Server')
  })
}
function subscribe(gRecaptchaResponse) {

}


module.exports = router;