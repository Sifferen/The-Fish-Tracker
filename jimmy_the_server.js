const express = require('express')
const app = new express();
const path = require('path')
app.listen(3000,function () {
        console.log('started');
    })
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'public/jimmythe.html'));
      });
      
    
    
      
      