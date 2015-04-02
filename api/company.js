
var http = require('http');
var mysql = require('mysql');
var express = require('express'), path = require('path');
var app = express();
//db connection details 
var db = mysql.createPool({
  host :'localhost',
  user : 'root',
  password : 'july1890',
	database : 'crowdfunding',
 });
// body parser need to be included to parse value from url, express is required
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//use-crud will now have the four functions
var CRUD = require('mysql-crud');
var cmpnycrud = CRUD(db,'company');

//crud insert row in the table

export.addcompany = function(req,res){
  cmpnycrud.create({'cmpny_name': 'fountaintechies', 
                    'cmpny_logo': '', 
                    'cmpny_description': 'young company in angularjs and nodejs', 
                    'cmpny_industry': 'software', 
                    'cmpny_location': 'singapore'}, 
                    function (err, vals) {
    console.log('Row successfully entered');
  });
}
//crud select from table 
//crud delete from table
//crude update table
