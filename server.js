var express = require('express');
var mongoose = require('mongoose');
var index = require('./routes/index.js');
var itemRouter = require('./routes/items.js');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', index);
app.use('/items', itemRouter);

var mongoURI = "mongodb://localhost:27017/items";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(){
  console.log('mongodb connection error', err);
});

MongoDB.once('open', function() {
  console.log('mongodb connection open!!!');
});


var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Address', server.address());
  console.log("Listening on port ", port);
})
