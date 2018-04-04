'use strict'

var express    = require('express'),
	api        = express.Router(),
    controller = require('../controllers/c_download');

api
	.post('/download',              controller.download)
	.post('/downloadMultipleInZip', controller.downloadMultipleInZip)

module.exports = api;

