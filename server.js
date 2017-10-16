// init project
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
//https://www.npmjs.com/package/multer docs
var multer = require('multer');
var upload = multer({dest: "uploads/"});

app.use(cors());
app.use(bodyParser.json());
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/upload',upload.single('file'),function(request,response){
  return response.json(request.file);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
