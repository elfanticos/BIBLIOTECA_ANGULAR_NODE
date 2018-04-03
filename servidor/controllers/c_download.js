'use strict'
var path = require('path'),
	fs   = require('fs');

function download(req, res) {
	var filename = req.body.filename,
	    filepath = path.join(__dirname,'../uploads') +'/'+filename,
	    data     = 'data hardcode servidor nodejs nuevo con promise';

	var promise = new Promise((resolve,reject) => {
		//CREAR ARCHIVO
		fs.appendFile(filepath, data, (err) => {
  		return (err) ? reject(err.message) : resolve(true);
		});
	});

	promise
		.then((resolved) => {
			//MANDAR ARCHIVO A LA VISTA
            res.sendFile(filepath);
            //COMPROBAR SI EXISTE EL ARCHIVO
            return new Promise((resolve,reject) => {
            	fs.stat(filepath, (err, stats) => {
            		return (err) ? reject(err.message) : resolve(true);
   				});
            });
		})
		.then((resolved) => {
			//ELIMINAR EL ARCHIVO
			fs.unlink(filepath, (err) => {
 			 	if (err) throw err;
  				console.log(`Se elimino correctamente el archivo ${filename}`);
			});
		})
		.catch((err) => {
			console.log(err);
		});
}

module.exports = {
	download
}