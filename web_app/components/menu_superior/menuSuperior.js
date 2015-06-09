var popupDesligar;

function carregarMenu(hideBtnConfig){
	var templateMenu = "menu";

	$.get("../components/menu_superior/menu.html", function(template) {
		var menuSuperior = Mustache.render($(template).filter("#" + templateMenu).html());
		$("#menuSuperior").html(menuSuperior);
		
		var popup = Mustache.render($(template).filter('#popup').html());
		$("body").append(popup);
		
		popupDesligar = new Popup($("#popupDesligar"));
	});
}

function abrirPopupDesligar(){
	popupDesligar.openDialog(200, 322);
}

function abrirConfiguracoes(){
	//TODO Abrir configurações
}

function executarComando(comando){
	$.post("/server/executor/executar/" + comando, function(data){
		console.log(data);
	});
}