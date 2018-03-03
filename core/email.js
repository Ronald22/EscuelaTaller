var nodemailer = require('nodemailer');

exports.receptor = function(nombre, apellido, correo){
	var mimensaje = '<h1>Escuela Taller para la Reconstrucción de la Provincia de Manabí</h1>'
		mimensaje += '<p> Bienvenid@ '+nombre+' '+apellido+'.</p>'
		mimensaje += '<p> Gracias por postular en la Escuela Taller, a continuación has click en el enlace para validar tu correo.</p>'
		mimensaje += '<p> Al hacer click en el enlace te redigiras a nuestra web para seguir con el proceso de inscripción.</p>'
		mimensaje += '<br> <a href="http://localhost:3000/html/usuario/formulario.html"><-----Confirmar Correo-----></a>'
	
	var mailOption = {
		from:'Escuela Taller',
		to:correo,
		subject:'Confirmación de Correo',
		text:'Bienvenido',
		html:mimensaje
	}
	return mailOption
}