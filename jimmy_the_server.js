const express = require('express')
const app = new express();
const bodyParser = require("body-parser");

const path = require('path')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000,function () {
        console.log('mehhhhhh');
    })
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'public/jimmythelanding.html'));
      });
      
    
      app.get('/jimmytheregistration.html', function(req, res) {
        res.sendFile(path.join(__dirname, 'public/jimmytheregistration.html'));
      });
      
      
      app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'public/jimmythelanding.html'));
      });

      app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'public/jimmythelanding.html'));
      });

      app.post('/jimmytheregistration.html', function(req, res) {
        console.log(req.body)
        res.sendFile(path.join(__dirname, 'public/jimmytheregistration.html'));
      });