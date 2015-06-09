var aplicativosService = require("./aplicativosService");
var executor = require("executorComandos.js")

/**
 * Função responsável por abrir um aplicativo
 * @returns {JSONObject} - lista de todos os aplicativos
 */
exports.abrirAplicativo = function(id){
	var success = function(aplicativo){
		executor(aplicativo.local).abrir();
	}
	aplicativosService.obterAplicativoPorId(id, success);
};

exports.executar = function(comando){
	switch(comando){
		case "desligar": desligar();
		break;
		case "reiniciar": reiniciar();
		break;
		case "suspender": suspender();
		break;
	}
};

var desligar = function(){
	executor("shutdown /s /t 0").executar();
};

var reiniciar = function(){
	executor("shutdown /r /t 0").executar();
};

var suspender = function(){
	executor("shutdown /h").executar();
};