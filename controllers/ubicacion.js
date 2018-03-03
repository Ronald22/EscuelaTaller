var db = require("../core/db");
var httpMsgs = require("../core/mensajesHTTPs");
var consulta = true, consulta2 = false;

exports.consultarPais = function (req, resp){
	db.executeSql("SELECT * FROM Pais",null , consulta, function(error, datos){
		if(datos){
			httpMsgs.sendJson(req, resp, datos);
		}
		else{
			httpMsgs.show500(req, resp, error);
		}	 
	});
};
exports.consultarProvincia = function (req, resp){
	db.executeSql("SELECT id, nombreProvincia  FROM Provincia ",null , consulta, function(error, datos){
		if(datos){
			httpMsgs.sendJson(req, resp, datos);
		}
		else{
			httpMsgs.show500(req, resp, error);
		}	 
	});
};
exports.consultarCanton = function (req, resp, inserts){
	db.executeSql("SELECT id, nombreCiudad FROM Ciudad  WHERE id_Provincia = ?", inserts, consulta2, function(error, datos){
		if(datos){
			httpMsgs.sendJson(req, resp, datos);
		}
		else{
			httpMsgs.show500(req, resp, error);
		}	 
	});
};
exports.consultarParroquia = function (req, resp, inserts){
	db.executeSql("SELECT id, nombreParroquia FROM Parroquia WHERE id_Ciudad = ?", inserts, consulta2, function(error, datos){
		if(datos){
			httpMsgs.sendJson(req, resp, datos);
		}
		else{
			httpMsgs.show500(req, resp, error);
		}	 
	});
};