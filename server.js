var http = require("http");
var express = require('express');
var bodyparser = require('body-parser')
var estudiante = require("./controllers/estudiante");
var documento = require("./controllers/documento");
var curso = require("./controllers/curso");
var categoria = require("./controllers/categoria");
var administrador = require("./controllers/administrador");
var ubicacion = require("./controllers/ubicacion");
var configuracion = require("./config");
var httpMsgs = require("./core/mensajesHTTPs");
var email = require("./core/email");
var nodemailer = require('nodemailer');

/*-------------------------Estudiante-----------------------------*/
var rutaEstudiante = express.Router();
rutaEstudiante.use(bodyparser())
rutaEstudiante.route('/')
.get(estudiante.consultarEstudiante)
.post(function(req, resp){
	var datosEstudiante = [req.body.codigo, req.body.nombre, req.body.apellido, req.body.cedula, req.body.expedicion_Cedula, req.body.correo, req.body.lugar_Nacimiento, req.body.fecha_Nacimiento, req.body.fecha_Inscripcion, req.body.edad, req.body.genero, req.body.lugar_Residencia, req.body.referencia_Residencia, req.body.telefono_Fijo, req.body.celular_Whatsapp, req.body.otro_Celular, req.body.seguro_Medico, req.body.tipo_Sangre, req.body.contactoEmergencia, req.body.telefono_Contacto, req.body.primaria, req.body.bachillerato, req.body.tercer_Nivel, req.body.cuarto_Nivel,req.body.profesion, req.body.ocupacion,  req.body.otros_Cursos, req.body.interes_Curso, req.body.estado, req.body.id_Curso];
	estudiante.insertar(req, resp, datosEstudiante);
})
/*.put(function(req, resp){
	var datosEstudiante = [req.body.nombre, req.body.apellido, req.body.cedula, req.body.expedicion_Cedula, req.body.correo, req.body.lugar_Nacimiento, req.body.fecha_Nacimiento, req.body.fecha_Inscripcion, req.body.edad, req.body.genero, req.body.lugar_Residencia, req.body.referencia_Residencia, req.body.telefono_Fijo, req.body.telefono_Celular, req.body.whatsapp, req.body.seguro_Medico, req.body.tipo_Sangre, req.body.contactoEmergencia, req.body.telefono_Contacto, req.body.nivel_Academico, req.body.ocupacion, req.body.profesion, req.body.otros_Cursos, req.body.interes_Curso, req.body.aceptacion_Reglamento, req.body.estado, req.body.id];
	estudiante.actualizar(req, resp, datosEstudiante);
})*/
.delete(function(req, resp){
	var idEstudiante = req.params.codigo,
		insert = [idEstudiante];
	estudiante.eliminar(req, resp, insert); 				
});
rutaEstudiante.route("/:codigo/")
.get(function(req, resp){				
	var idEstudiante = req.params.codigo,
		insert = [idEstudiante];
	estudiante.consultarPorId(req, resp, insert); 				
});
/*----------------------------Documento--------------------------------*/
var rutaDocumento = express.Router();
rutaDocumento.use(bodyparser())
rutaDocumento.route("/solicitud/:codigo/")
.get(function(req, resp){				
	var codigo = req.params.codigo,
		insert = [codigo];
	documento.consultarSolicitud(req, resp, insert);
});
rutaDocumento.route("/ficha/:codigo/")
.get(function(req, resp){				
	var codigo = req.params.codigo,
		insert = [codigo];
	documento.consultarFicha(req, resp, insert);
});
rutaDocumento.route("/acta/:codigo/")
.get(function(req, resp){				
	var codigo = req.params.codigo,
		insert = [codigo];
	documento.consultarActa(req, resp, insert);
});
/*----------------------------Curso--------------------------------*/
var rutaCurso = express.Router();
rutaCurso.use(bodyparser())
rutaCurso.route('/')
.get(curso.consultarCursos)
.post(function(req, resp) {
	var datosCurso = [req.body.id, req.body.nombreCurso, req.body.descripcion, req.body.edad_Min, req.body.edad_Max, req.body.id_Categoria];
	curso.insertar(req, resp, datosCurso);
})
.put(function(req, resp){
	var datosCurso = [req.body.nombreCurso, req.body.descripcion, req.body.edad_Min, req.body.edad_Max, req.body.id_Categoria, req.body.id];
	curso.actualizar(req, resp, datosCurso);
})
.delete(function(req, resp){
	var idCurso = req.body.id,
		insert = [idCurso];
	curso.eliminar(req, resp, insert); 		
});
rutaCurso.route("/:idCategoria/")
.get(function(req, resp){				
	var idCategoria = req.params.idCategoria,
		insert = [idCategoria];
	curso.consultarPorCategoria(req, resp, insert); 			
});
rutaCurso.route("/editar/:id/")
.get(function(req, resp){				
	var id = req.params.id,
		insert = [id,id];
	curso.consultarPorParametro(req, resp, insert); 			
});

/*----------------------------Categoria--------------------------------*/
var rutaCategoria = express.Router();
rutaCategoria.use(bodyparser())
rutaCategoria.route('/')
.get(categoria.consultarCategoria)

/*----------------------------Administrador--------------------------------*/
var rutaAdministrador = express.Router();
rutaAdministrador.use(bodyparser())
rutaAdministrador.route('/login/')
.get(administrador.consultar);
rutaAdministrador.route('/listado/')
.get(administrador.consultarListado);
rutaAdministrador.route('/listado/:codigo/')
.get(function(req, resp){				
	var codigo = req.params.codigo,
		insert = [codigo+'%',codigo+'%'];
	administrador.consultarListadoPorParametro(req, resp, insert);		
});
rutaAdministrador.route('/perfil/')
.put(function(req, resp){
	var insert = [req.body.estado, req.body.codigo];
	administrador.actualizarEstado(req, resp, insert);
})
.delete(function(req, resp){
	var insert = [req.body.codigo];
	administrador.eliminarPostulante(req, resp, insert); 
				
});
rutaAdministrador.route('/perfil/:codigo/')
.get(function(req, resp){				
	var codigo = req.params.codigo,
		insert = [codigo,codigo];
	administrador.consultarPerfil(req, resp, insert);		
});
rutaAdministrador.route('/')
.put(function(req, resp){
	var insert = [req.body.nombre, req.body.apellido, req.body.usuario];
	administrador.actualizarAdmin(req, resp, insert);
})
rutaAdministrador.route('/contrasena/')
.put(function(req, resp){
	var insert = [req.body.contraseña];
	administrador.actualizarContraseña(req, resp, insert);
})
rutaAdministrador.route('/correo/')
.put(function(req, resp){
	var insert = [req.body.correo];
	administrador.actualizarCorreo(req, resp, insert);
})

/*----------------------------Ubicación--------------------------------*/
var rutaUbicacion = express.Router();
rutaUbicacion.use(bodyparser())
rutaUbicacion.route('/pais/')
.get(ubicacion.consultarPais);
rutaUbicacion.route('/provincia/')
.get(ubicacion.consultarProvincia);
rutaUbicacion.route('/canton/:id/')
.get(function(req, resp){				
	var id = req.params.id,
		insert = [id];
	ubicacion.consultarCanton(req, resp, insert);		
});
rutaUbicacion.route('/parroquia/:id/')
.get(function(req, resp){				
	var id = req.params.id,
		insert = [id];
	ubicacion.consultarParroquia(req, resp, insert);		
});
/*---------------------------Correo Verificación----------------------------*/
var rutaCorreo=express.Router()
rutaCorreo.use(bodyparser())
rutaCorreo.route('/')
.post(function(req,res){
	var correo = req.body.correo,
		nombre = req.body.nombre,
		apellido = req.body.apellido;
	var	correoE = req.body.correoEmisor,
		contraseña = req.body.contraseñaCorreo;

	var emisor = nodemailer.createTransport({
		service:'hotmail',
		auth:{
			user: correoE,
			pass: contraseña
		}
	});	
	
	emisor.sendMail(email.receptor(nombre, apellido, correo), (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });

    res.writeHead(200, {"Content-Type": "application/json"});
	res.end();
});

/*--------------------------------------------------------------------------------*/
var app = express()
	.use('/estudiante',rutaEstudiante)
	.use('/documento',rutaDocumento)
	.use('/curso',rutaCurso)
	.use('/categoria',rutaCategoria)
	.use('/administrador',rutaAdministrador)
	.use('/ubicacion',rutaUbicacion)
	.use('/correo',rutaCorreo)
	.use(express.static(__dirname+'/public'))
	.listen(configuracion.webPort, function(){
		console.log("Servidor escuchando por el puerto " + configuracion.webPort);
});