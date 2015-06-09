/**
 * Função responsável por criar um relógio dentro de um elemento na página
 * @param elemento - elemento jquery que onde o relógio será renderizado
 */
var relogio = function(elemento){
	var momento = new Date();
	var hora = momento.getHours();
	hora = hora < 10 ? "0" + hora : hora;
	var min = momento.getMinutes();
	min = min < 10 ? "0" + min : min;
	var data = momento.toLocaleDateString("pt-BR");
	var diaSemana = momento.toLocaleDateString("pt-BR",{weekday: "long"});
	
	elemento.html('<span id="data">' + data + '</span>');
	elemento.append('<span id="hora">' + hora + ':' + min + '</span>');
	elemento.append('<span id="diaSemana">' + diaSemana + '</span>');
	setTimeout(function(){
		relogio(elemento);
	}, 1000);
};