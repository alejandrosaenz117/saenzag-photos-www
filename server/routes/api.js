const express = require('express');
const router = express.Router();
const fs = require('fs')
var path = require('path');

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';
const assets = path.join(__dirname, '..','..','src', 'assets');
console.log(assets)

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

function extension(element) {
  var extName = path.extname(element);
  return extName === '.' + 'DS_Store'; 
};

router.get('/gallery_landscape', (req, res) => {
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
  //maybe take in a string to determine which gallery will get returned
  images = [];
  fs.readdirSync(assets + '/gallery_night_colors').forEach(file => {
      images.push('../../assets/gallery_night_colors/' + file)
  })
  //Removes .DS_Store
  images = images.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
  res.status(200).json(images)
})

module.exports = router;