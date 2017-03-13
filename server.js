#!/usr/bin/env nodejs
//node web server and api

//import filesystem library
var fs = require('fs');
//Import Express Library
var express = require('express');
var app = express();
//Import logger
var winston = require('winston');

//load configuration file
//var config = JSON.parse(fs.readFileSync('server_config.json',encoding="UTF-8"));
//var db = require('./data/db')(config,winston);

//set up logger
winston.add(winston.transports.File,{filename: './api.log'});

//api endpoints
var apiRouter = express.Router();

var chipsRoute = require('./routes/leagueAPI')(apiRouter, winston);

app.use('/',express.static('./views/insecure/'));
app.use('/polymer',express.static('./polymer'));
app.listen(80, function() {
    winston.log('info', 'server started on port 80!')
});