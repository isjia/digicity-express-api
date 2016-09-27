var express = require('express')
var app = express()

app.get('/peter', function (req, res) {
  console.log('Hello Peter')
})

app.get('/billie', function (req, res) {
  console.log('Hello Billie')
})

app.listen(3000, function(){
  console.log('running on port 3000...plz visit http://localhost:3000')
})
