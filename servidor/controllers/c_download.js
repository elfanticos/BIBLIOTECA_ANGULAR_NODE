'use strict'
var path = require('path'),
	fs   = require('fs'),
	zip  = require('express-zip');

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

function downloadMultipleInZip(req,res) {
	var files    = req.body.filesnames,// ---> ARRAY FILES
	    fileUbic = path.join(__dirname,'../uploads') +'/'; // ----> PATH DONDE SE CREARÁ LOS ARCHIVOS

	new Promise((resolve,reject)=> {
		crearArchivos(files,fileUbic, (arryPath) => {
			resolve(arryPath);
		});
	})
	.then((resolved) => {
		if(resolved.length > 0) {
			//ENVIAMOS ZIP SI HAY MAS DE 2 FILES
			res.zip(resolved,'archivos.zip', (err,bytesZipped) => {
				if(err) throw err;
				eliminarArchivos(files,fileUbic); // ----> ENVIADO EL RESPONSE ELIMINAMOS LOS ARCHIVOS
			});
		}else {
			//ENVIAMOS TXT SI SOLO ES 1 FILE
			res.sendFile(fileUbic+files[0],null, (err) => {
				eliminarArchivos(files,fileUbic); // ----> ENVIADO EL RESPONSE ELIMINAMOS EL ARCHIVO
			});
		}
	})
	.catch((err) => {
		console.log(err);
	})
}

function crearArchivos(files,fileUbic,callback) {
	var cont     = 1,
	    arryPath = [];
	//ITERAR EL ARRAY DE NOMBRES DE ARCHIVOS
	for(let file of files) {
		let filename = file,
		    filepath = fileUbic+filename,
		    data     = `data hardcode servidor nodejs nuevo con promise ${filename}`;
		//LLENAR ARRAY PATH SI HAY MÁS DE UN ARCHIVO
		if(files.length > 1) {arryPath.push({path: filepath, name: file});}
		//CREAR ARCHIVO
		fs.appendFile(filepath, data, (err) => {
			if(err) throw err;
			if(cont == files.length) callback(arryPath);
			else cont++;
		});
	}
}

function eliminarArchivos(files,fileUbic) {
	//ITERAR EL ARRAY DE NOMBRES DE ARCHIVOS
	for(let file of files) {
		//ELIMINAMOS EL  ARCHIVO
		fs.unlink(fileUbic+file, (err) => {
 			if (err) throw err;
		});
	}
}

module.exports = {
	download,
	downloadMultipleInZip
}