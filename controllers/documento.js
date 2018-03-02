var db = require("../core/db");
var httpMsgs = require("../core/mensajesHTTPs");
var consulta = true, consulta2 = false;

exports.consultarSolicitud = function (req, resp, inserts){
	db.executeSql("SELECT E.nombre, E.apellido, E.cedula, E.lugar_Residencia, C.nombreCurso FROM Estudiante E, Curso C WHERE E.id_Curso = C.id and E.codigo = ?", inserts, consulta2, function(error, datos){
		if (typeof datos !== 'undefined' && datos.length > 0){
	      	httpMsgs.sendJson(req, resp, datos);
	    }
	    else{
	      	httpMsgs.show404(req, resp, error);
	    }
	});
};
exports.consultarFicha = function (req, resp, inserts){
	db.executeSql("SELECT E.codigo, E.nombre, E.apellido, E.cedula, E.expedicion_Cedula, E.correo, E.lugar_nacimiento, E.fecha_Nacimiento, E.fecha_Inscripcion, E.edad ,E.genero ,E.lugar_Residencia ,E.referencia_Residencia ,E.telefono_Fijo ,E.celular_Whatsapp ,E.otro_Celular ,E.seguro_Medico ,E.tipo_Sangre ,E.contactoEmergencia ,E.telefono_Contacto ,E.primaria ,E.bachillerato ,E.tercer_Nivel ,E.cuarto_Nivel ,E.profesion , E.ocupacion ,E.otros_Cursos ,E.interes_Curso ,C.nombreCurso, T.nombreCategoria FROM Estudiante E, Curso C, Categoria T WHERE E.id_Curso = C.id and C.id_Categoria = T.id and E.codigo = ?", inserts, consulta2, function(error, datos){
		if (typeof datos !== 'undefined' && datos.length > 0){
	      	httpMsgs.sendJson(req, resp, datos);
	    }
	    else{
	      	httpMsgs.show404(req, resp, error);
	    }
	});
};
exports.consultarActa = function (req, resp, inserts){
	db.executeSql("SELECT E.codigo, E.nombre, E.apellido, E.cedula,  E.fecha_Inscripcion, C.nombreCurso FROM Estudiante E, Curso C WHERE E.id_Curso = C.id and E.codigo = ?", inserts, consulta2, function(error, datos){
		if (typeof datos !== 'undefined' && datos.length > 0){
	      	httpMsgs.sendJson(req, resp, datos);
	    }
	    else{
	      	httpMsgs.show404(req, resp, error);
	    }
	});
};