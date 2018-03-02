var db = require("../core/db");
var httpMsgs = require("../core/mensajesHTTPs");
var consulta = true, consulta2 = false;

exports.consultarEstudiante = function (req, resp){
	db.executeSql("SELECT * FROM Estudiante",null , consulta, function(error, datos){
		if(datos){
			httpMsgs.sendJson(req, resp, datos);
		}
		else{
			httpMsgs.show500(req, resp, error);
		}	 
	});
};

exports.consultarPorId = function (req, resp, inserts){
	db.executeSql("SELECT * FROM Estudiante WHERE codigo = ?", inserts, consulta2, function(error, datos){
		if (typeof datos !== 'undefined' && datos.length > 0){
	      	httpMsgs.sendJson(req, resp, datos);
	    }
	    else{
	      	httpMsgs.show404(req, resp, error);
	    }
	});
};
exports.insertar = function (req, resp, inserts){
	var sql = "INSERT INTO Estudiante (codigo, nombre, apellido, cedula, expedicion_Cedula, correo, lugar_Nacimiento, fecha_Nacimiento, "
		sql += "fecha_Inscripcion, edad, genero, lugar_Residencia, referencia_Residencia, telefono_Fijo, celular_Whatsapp, otro_Celular, seguro_Medico, "
		sql += "tipo_Sangre, contactoEmergencia, telefono_Contacto, primaria, bachillerato, tercer_Nivel, cuarto_Nivel,profesion, ocupacion, otros_Cursos, interes_Curso,"
		sql += "estado, id_Curso) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"

	db.executeSql(sql, inserts, consulta2, function(error, datos){
		if(datos){
			httpMsgs.send200(req, resp, datos);
		}
		else{
			httpMsgs.show500(req, resp, error);
		}	
	});
};

/*exports.actualizar = function (req, resp, inserts){
	var sql = "UPDATE Estudiante SET nombre = ?, apellido = ?, cedula = ?, expedicion_Cedula = ?, correo = ?, lugar_Nacimiento = ?, fecha_Nacimiento = ?, "
		sql += "fecha_Inscripcion = ?, edad = ?, genero = ?, lugar_Residencia = ?, referencia_Residencia = ?, telefono_Fijo = ?, telefono_Celular = ?, whatsapp = ?, seguro_Medico = ?, "
		sql += "tipo_Sangre = ?, contactoEmergencia = ?, telefono_Contacto = ?, nivel_Academico = ?, ocupacion = ?, profesion = ?, otros_Cursos = ?, interes_Curso = ?, aceptacion_Reglamento = ?,"
		sql += "estado = ?, id_Curso = ? WHERE id = ?";
			
	db.executeSql(sql, inserts, consulta2, function(error, datos){
		if(datos){
			httpMsgs.send200(req, resp, datos);
		}
		else{
			httpMsgs.show500(req, resp, error);
		}	
	});
};*/

exports.eliminar = function (req, resp, inserts){
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