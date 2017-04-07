var path = require("path");
var express = require("express");
var app = express();
var aplicativosService = require("./server/service/aplicativosService");
var executorService = require("./server/service/executorService");
var bodyParser = require('body-parser');
var executor = require("executorComandos");

var multer = require('multer');
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./uploads/");
	},
	filename: function (req, file, cb) {
		console.log(file);
		cb(null, file.originalname);
	}
});
var upload = multer({
	storage: storage
});

app.use("/app-starter", express.static(path.join(__dirname, "/web_app")));
app.use("/images", express.static(path.join(__dirname, "/uploads")));

app.use(bodyParser.json());

app.get("/server/aplicativos", function(req, res){
	var aplicativos = aplicativosService.listarAplicativos();
	res.send(aplicativos);
});

app.get("/server/aplicativos/:id", function(req, res){
	aplicativosService.obterAplicativoPorId(req.params.id, function(aplicativo) {
		res.send(aplicativo);
	});
});

app.post("/server/aplicativos", function(req, res){
	var aplicativo = req.body;
	aplicativosService.salvarAplicativo(aplicativo, function() {
		res.send("success");
	});
});

app.delete("/server/aplicativos/:id", function(req, res){
	aplicativosService.excluirAplicativo(req.params.id, function() {
		res.send("success");
	});
});

app.post("/server/executor/abrirAplicativo/:id", function(req, res){
	executorService.abrirAplicativo(req.params.id);
	res.send("success");
});

app.post("/server/executor/executar/:comando", function(req, res){
	executorService.executar(req.params.comando);
	res.send("success");
});

app.post("/server/upload", upload.single("image"), function(req, res){
	console.log(req.file);
	res.send("success");
});

app.listen(8089, function(){
	console.log("server started");
	//executor("C:\\Users\\IBM_ADMIN\\Pessoal\\Workspace NodeJS\\run.bat").abrir();
});