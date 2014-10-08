'use strict';

// dependencies
var express = require('express');
var routes  = require('./routes');
var users   = require('./routes/users');
var http    = require('http');
var path    = require('path');
var mongoose = require('mongoose');

// instantiate new app
var app = express();

// config all environment 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.router);
app.use(express.static(path.join(__dirname, 'public')));

// config dev environment only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());

	// connect mongoose to mongoDB
	mongoose.connect('mongodb://localhost/test1DB');
};

app.get('/', function(req, res) {
	res.send('Welcome to your new API');
});

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server is running on port ' + app.port);
});



