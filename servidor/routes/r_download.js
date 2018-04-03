'use strict'

var express    = require('express'),
	api        = express.Router(),
    controller = require('../controllers/c_download');

api
	.post('/download', controller.download)

module.exports = api;

