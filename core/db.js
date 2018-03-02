var BDsql = require("mysql");
var BDconfiguracion = require("../config");


exports.executeSql = function (sql, inserts, consulta, callback){
	var conn = BDsql.createConnection(BDconfiguracion.dbConfig);
	conn.connect(function(error) {
		if(error){
			throw error;
		}
		else{
			console.log('Base de datos conectada con éxito')
		}
	});
	
	if (consulta) {
		conn.query(sql, function(error, rows){
			if(error){
				throw error;
			}
			else{
				console.log('datos procesados con éxito');
				callback(error, rows);
			}
		});
	}
	if (!consulta) {
		conn.query(sql, inserts, function(error, rows){
			if(error){
				throw error;
			}
			else{
				console.log('datos procesados con éxito');
				callback(error, rows);
			}
		});
	}
};