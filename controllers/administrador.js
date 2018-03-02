var db = require("../core/db");
var httpMsgs = require("../core/mensajesHTTPs");
var consulta = true, consulta2 = false;

exports.consultar = function (req, resp){
	db.executeSql("SELECT * FROM Administrador",null , consulta, function(error, datos){
		if(datos){
			httpMsgs.sendJson(req, resp, datos);
		}
		else{
			httpMsgs.show500(req, resp, error);
		}	 
	});
};
exports.consultarListado = function (req, resp){
	db.executeSql("SELECT E.codigo, E.nombre, E.apellido, E.cedula, E.fecha_Inscripcion, E.estado ,C.nombreCurso, T.nombreCategoria FROM Estudiante E, Curso C, Categoria T WHERE E.id_Curso = C.id and C.id_Categoria = T.id",null , consulta, function(error, datos){
		if(datos){
			httpMsgs.sendJson(req, resp, datos);
		}
		else{
			httpMsgs.show500(req, resp, error);
		}	 
	});
};
exports.consultarListadoPorParametro = function (req, resp, inserts){
	db.executeSql("SELECT E.codigo, E.nombre, E.apellido, E.cedula, E.fecha_Inscripcion, E.estado ,C.nombreCurso, T.nombreCategoria FROM Estudiante E, Curso C, Categoria T WHERE E.id_Curso = C.id and C.id_Categoria = T.id and (E.cedula LIKE ? or E.codigo LIKE ?)", inserts, consulta2, function(error, datos){
		if(datos){
			httpMsgs.sendJson(req, resp, datos);
		}
		else{
			httpMsgs.show500(req, resp, error);
		}	 
	});
};
exports.consultarPerfil = function (req, resp, inserts){
	db.executeSql("SELECT E.codigo, E.nombre, E.apellido, E.cedula, E.expedicion_Cedula, E.correo, E.lugar_Nacimiento, E.fecha_Nacimiento, E.fecha_Inscripcion, E.edad ,E.genero ,E.lugar_Residencia ,E.referencia_Residencia ,E.telefono_Fijo ,E.celular_Whatsapp ,E.otro_Celular ,E.seguro_Medico ,E.tipo_Sangre ,E.contactoEmergencia ,E.telefono_Contacto ,E.primaria ,E.bachillerato ,E.tercer_Nivel ,E.cuarto_Nivel ,E.profesion , E.ocupacion ,E.otros_Cursos ,E.interes_Curso, E.estado, C.nombreCurso, T.nombreCategoria FROM Estudiante E, Curso C, Categoria T WHERE E.id_Curso = C.id and C.id_Categoria = T.id and (E.codigo = ? or E.cedula = ?)", inserts, consulta2, function(error, datos){
		if(datos){
			httpMsgs.sendJson(req, resp, datos);
		}
		else{
			httpMsgs.show500(req, resp, error);
		}	 
	});
};
exports.actualizarEstado = function (req, resp, inserts){
	var sql = "UPDATE Estudiante SET estado = ? WHERE codigo = ? ";
			
	db.executeSql(sql, inserts, consulta2, function(error, datos){
		if(datos){
			httpMsgs.send200(req, resp, datos);
		}
		else{
			httpMsgs.show500(req, resp, error);
		}	
	});
};
exports.actualizarContraseña = function (req, resp, inserts){
	var sql = "UPDATE Administrador SET contraseña = ? WHERE id = 1 ";
			
	db.executeSql(sql, inserts, consulta2, function(error, datos){
		if(datos){
			httpMsgs.send200(req, resp, datos);
		}
		else{
			httpMsgs.show500(req, resp, error);
		}	
	});
};
exports.actualizarCorreo = function (req, resp, inserts){
	var sql = "UPDATE Administrador SET correo = ? WHERE id = 1 ";
			
	db.executeSql(sql, inserts, consulta2, function(error, datos){
		if(datos){
			httpMsgs.send200(req, resp, datos);
		}
		else{
			httpMsgs.show500(req, resp, error);
		}	
	});
};
exports.actualizarAdmin = function (req, resp, inserts){
	var sql = "UPDATE Administrador SET nombre = ?,  apellido = ?,  usuario = ? WHERE id = 1 ";
			
	db.executeSql(sql, inserts, consulta2, function(error, datos){
		if(datos){
			httpMsgs.send200(req, resp, datos);
		}
		else{
			httpMsgs.show500(req, resp, error);
		}	
	});
};
exports.eliminarPostulante = function (req, resp, inserts){
	var sql = 'DELETE FROM Estudiante WHERE codigo = ?';
			
	db.executeSql(sql, inserts, consulta2, function(error, datos){
		if(datos){
			httpMsgs.send200(req, resp, datos);
		}
		else{
			httpMsgs.show500(req, resp, error);
		}	
	});
};