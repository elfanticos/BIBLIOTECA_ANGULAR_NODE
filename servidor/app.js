'use strict'

var express    = require('express'),
    bodyParser = require('body-parser'),
    app        = express(),
    cors       = require('cors');

//ROUTES
var r_download = require('./routes/r_download');

app
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({extended : false}))
	//CABECERAS HTTP
	.use(cors())
	//RUTAS
	.use('',r_download)

module.exports = app;
