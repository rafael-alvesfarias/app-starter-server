var aplicativosDAO = require("../data/dao/aplicativosDAO.js");

/**
 * Função responsável por listar todos os aplicativos
 * @returns {JSONObject} - lista de todos os aplicativos
 */
exports.listarAplicativos = function(){
	return aplicativosDAO.listar();
};

/**
 * Função responsável por buscar um aplicativo pelo seu id
 * @param id - identificador do aplicativo
 * @param success - função de sucesso.
 */
exports.obterAplicativoPorId = function(id, success){
	var aplicativos = aplicativosDAO.listar();
	aplicativos.apps.forEach(function(aplicativo){
		if(aplicativo.index === parseInt(id)){
			success(aplicativo);
			return;
		}
	});
};

/**
 * Função responsável por salvar um aplicativo
 * @param success - função de sucesso.
 */
exports.salvarAplicativo = function(aplicativo, success){
	var caminho = aplicativo.imagem.split("\\");
	aplicativo.imagem = caminho[caminho.length - 1];
	console.log(aplicativo.imagem);
	
	aplicativosDAO.salvar(aplicativo, function(){
		success();
	});
};

/**
 * Função responsável por excluir um aplicativo
 * @param id - identificador do aplicativo
 * @param success - função de sucesso.
 */
exports.excluirAplicativo = function(id, success){
	aplicativosDAO.excluir(id, function(){
		success();
	});
};