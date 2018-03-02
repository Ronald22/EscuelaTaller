var db = require("../core/db");
var httpMsgs = require("../core/mensajesHTTPs");
var consulta = true, consulta2 = false;

exports.consultarCursos = function (req, resp){
	db.executeSql("SELECT C.id, C.nombreCurso, C.edad_Min, C.edad_Max, T.nombreCategoria FROM Curso C, Categoria T WHERE C.id_Categoria = T.id ORDER BY C.id ",null , consulta, function(error, datos){
		if(datos){
			httpMsgs.sendJson(req, resp, datos);
		}
		else{
			httpMsgs.show500(req, resp, error);
		}	 
	});
};

exports.consultarPorCategoria = function (req, resp, inserts){
	db.executeSql("SELECT * FROM Curso WHERE id_Categoria = ?", inserts, consulta2, function(error, datos){
		if (typeof datos !== 'undefined' && datos.length > 0){
	      	httpMsgs.sendJson(req, resp, datos);
	    }
	    else{
	      	httpMsgs.show404(req, resp, error);
	    }
	});
};
exports.consultarPorParametro = function (req, resp, inserts){
	db.executeSql("SELECT * FROM Curso WHERE id = ? or nombreCurso = ?", inserts, consulta2, function(error, datos){
		if(datos){
			httpMsgs.sendJson(req, resp, datos);
		}
		else{
			httpMsgs.show500(req, resp, error);
		}	
	});
};

exports.insertar = function (req, resp, inserts){
	var sql = "INSERT INTO Curso (id, nombreCurso, descripcion, edad_Min, edad_Max, id_Categoria) values(?,?,?,?,?,?)";
			
	db.executeSql(sql, inserts, consulta2, function(error, datos){
		if(datos){
			httpMsgs.send200(req, resp, datos);
		}
		else{
			httpMsgs.show500(req, resp, error);
		}	
	});
};

exports.actualizar = function (req, resp, inserts){
	var sql = "UPDATE curso SET nombreCurso = ?, descripcion = ?, edad_Min = ?, edad_Max = ?, id_Categoria = ? WHERE id = ?";
			
	db.executeSql(sql, inserts, consulta2, function(error, datos){
		if(datos){
			httpMsgs.send200(req, resp, datos);
		}
		else{
			httpMsgs.show500(req, resp, error);
		}	
	});
};

exports.eliminar = function (req, resp, inserts){
	var sql = 'DELETE FROM curso WHERE id = ?';
			
	db.executeSql(sql, inserts, consulta2, function(error, datos){
		if(datos){
			httpMsgs.send200(req, resp, datos);
		}
		else{
			httpMsgs.show500(req, resp, error);
		}	
	});
};