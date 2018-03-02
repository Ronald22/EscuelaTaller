var db = require("../core/db");
var httpMsgs = require("../core/mensajesHTTPs");
var consulta = true, consulta2 = false;

exports.consultarCategoria = function (req, resp){
	db.executeSql("SELECT * FROM Categoria",null , consulta, function(error, datos){
		if(datos){
			httpMsgs.sendJson(req, resp, datos);
		}
		else{
			httpMsgs.show500(req, resp, error);
		}	 
	});
};