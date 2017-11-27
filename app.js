
var express = require('express');
var app = express();
var bodyParser = require("body-parser");

// Body Parser Setup
app.use(bodyParser.urlencoded({ extended: false }));


// GET
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
    //res.sendFile('../index.html');
    //res.send('<html><body><h1>Hello There!</h1></body></html>');
});

// POST
app.post('/submit-data', function(req, res){
    res.send('POST Request');
});

// PUT
app.put('/update-data', function(req, res){
    var name = req.body.firstName + ' ' + req.body.lastName;

    res.send(name + ' submitted successfully!');
});

// DELETE
app.delete('/delete-data', function(req, res){
    res.send('DELETE Request');
});

// SERVER
var port = 5000;
var server = app.listen(port, function(){
    console.log('Application Server running on port ' + port)
})



