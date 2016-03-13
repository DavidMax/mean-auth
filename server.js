var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var app = express();



// GET /style.css etc
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.send('hello world');
});


app.listen(3000);
console.log("Listening on PORT 3000");