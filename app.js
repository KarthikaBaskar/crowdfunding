//npm-module declaration 
var express = require('express'),path = require('path');
var app = express();
var state = require('./api/company');
app.post('/api/newcompany', company.addcompany);


app.listen(5000);
console.log('Listening on port 5000...'); 
