const express = require('express')
const app = new express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const Usermodel = require ("./jimmythemodels/jimmytheusers")
const User = Usermodel.User
const Userrouter = require("./jimmytheroutes/jimmythepath")
const path = require('path')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const url = "mongodb://localhost:27017/jimmy"
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
  if (error) throw error;
  console.log('mehhhhhhhhhhhhhhhhhhhhhhhhhhh')
})
app.use('/', userRouter)
app.set('view engine', 'ejs')

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

      app.get('/jimmythelogin.html', function(req, res) {
        res.sendFile(path.join(__dirname, 'public/jimmythelogin.html'));
      });

      app.post('/jimmytheregistration.html', function(req, res) {
       const newUser = new User(req.body)
       newUser.save()
        res.sendFile(path.join(__dirname, 'public/jimmytheregistration.html'));
      });
      app.post('/jimmythe.html',function(req, res) {
        const{username,password} = req.body
        User.find({username: username, password: password}, (err, users) => {
          if (err) throw err;
          if (users.length === 0)
            res.sendFile(path.join(__dirname, 'public/jimmythelogin.html'))
          else
            res.sendFile(path.join(__dirname, 'public/jimmythe.html'))
        })
      })