var express = require('express');
var  app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/write', function(req, res) {
  var page = "<form method='post' action='/posts'>" +
             "<input type='text' name='title' />" +
             "<input type='submit' />" +
             "</form>"
  res.send(page)
})
app.get('/posts', function(req, res) {
  res.send('GET /posts')
  console.log('GET /posts')
})
app.post('/posts/', function(req, res) {
  res.send('the post title is: ' + req.body.title)
})
app.listen(3000, function() {
  console.log('running on port 3000')
})
