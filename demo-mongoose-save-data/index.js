var express = require('express');
var app = express();
var mongoose = require('mongoose');


app.post('/posts', function(req, res){
  console.log('hello');
});

app.listen(3000, function(){
  console.log('running on port 3000.....');
});
