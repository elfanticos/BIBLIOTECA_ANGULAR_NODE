'use strict'

const pgpromise = require('pg-promise')(),
      db        = pgpromise("postgres://postgres:postgres@localhost:5432/smiledu");

var  app  = require('./app'),
	 port = process.env.PORT || 5002;

db.connect();

app.listen(port, function() {
	console.log('Levanto correctamente el puerto '+port);
});

exports.conection = db;
exports.pgpromise = pgpromise;
