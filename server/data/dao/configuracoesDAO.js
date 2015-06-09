var fs = require("fs");
var arquivo = "app/data/config.json";

exports.salvar = function(configuracao, success) {
	var config = JSON.parse(fs.readFileSync(arquivo, 'utf8'));
	config.background = replaceAll(replaceAll(configuracao.background, "\\", "/"), " ", "%20");

	fs.writeFile(arquivo, JSON.stringify(config), function(err) {
		if (err) {
			console.log(err);
		} else {
			success();
		}
	});
};

exports.obter = function() {
	return JSON.parse(fs.readFileSync(arquivo, 'utf8'));
};

function replaceAll(str, de, para) {
	var pos = str.indexOf(de);
	while (pos > -1) {
		str = str.replace(de, para);
		pos = str.indexOf(de);
	}
	return (str);
}