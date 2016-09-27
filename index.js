var express = require('express')
var app = express()

app.get('/', function (req, res) {
  var page = "<html>" +
               "<body>" +
                 "<h1>Index.html</h1>" +
               "</body>" +
              "</html>"
  res.send(page)
})

app.get('/about.html', function (req, res) {
  var page = "<html>" +
               "<body>" +
                 "<h1>About.html</h1>" +
               "</body>" +
              "</html>"
  res.send(page)
})

app.listen(3000, function(){
  console.log('running on port 3000...plz visit http://localhost:3000')
})
