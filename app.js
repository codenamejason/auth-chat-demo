
var express = require('express');
var app = express();
var bodyParser = require("body-parser");

// Body Parser Setup
app.use(bodyParser.urlencoded({ extended: false }));

//setting middleware
//app.use(express.static(__dirname + 'public')); //Serves resources from public folder

// Using a virtual path
//app.use('/resources',express.static(__dirname + '/images'));

//Serves all the request which includes /images in the url from Images folder
//app.use('/images', express.static(__dirname + '/Images'));

// Mongo 
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {
   
     if(err) throw err;
     // Add to collection
     //db.collection('Persons', function (err, collection) {
     //Write databse Insert/Update/Query code here..
    //     collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
    //     collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
    //     collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });  

    //     db.collection('Persons').count(function (err, count) {
    //         if (err) throw err;
            
    //         console.log('Total Rows: ' + count);
    //     });
    // });

    // Update collection
    // db.collection('Persons', function (err, collection) {
        
    //     collection.update({id: 1}, { $set: { firstName: 'James', lastName: 'Gosling'} }, {w:1},
    //                                                  function(err, result){
    //                                                             if(err) throw err;    
    //                                                             console.log('Document Updated Successfully');
    //                                                     });

    //     collection.remove({id:2}, {w:1}, function(err, result) {
        
    //         if(err) throw err;    
        
    //         console.log('Document Removed Successfully');
    //     });

    // });

    // Query database
    db.collection('Persons', function (err, collection) {
        
         collection.find().toArray(function(err, items) {
            if(err) throw err;    
            console.log(items);            
        });
        
    });


});


// GET
app.get('/', function(req, res){

    //var sql = require("mssql");    
    // config for your database
    // var config = {
    //     user: 'sa',
    //     password: 'mypassword',
    //     server: 'localhost', 
    //     database: 'SchoolDB' 
    // };
    // connect to your database
    // sql.connect(config, function (err) {    
    //     if (err) console.log(err);
    //     // create Request object
    //     var request = new sql.Request();            
    //     // query to the database and get the records
    //     request.query('select * from Student', function (err, recordset) {            
    //         if (err) console.log(err)
    //         // send records as a response
    //         res.send(recordset);            
    //     });
    // });

    res.sendFile(__dirname + '/index.html');
    //res.sendFile('../index.html');
    //res.send('<html><body><h1>Hello There!</h1></body></html>');
});

// POST
app.post('/submit-data', function(req, res){
    var name = req.body.firstName + ' ' + req.body.lastName;
    
    res.send(name + ' submitted successfully!');
    // res.send('POST Request');
});

// PUT
app.put('/update-data', function(req, res){
    

    res.send('PUT Request!');
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



