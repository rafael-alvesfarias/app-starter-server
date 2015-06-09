var Popup = function(div) {
	this.div = div;
	this.openDialog = function(w, h) {
		$("body").append("<div id='mask' style='display:none'></div>");
		$("#mask").fadeIn();
		var left = (screen.width / 2) - (w / 2);
		var top = (screen.height / 2) - (h / 2);
		this.div.css("width", w);
		this.div.css("heigth", h);
		this.div.css("left", left);
		this.div.css("top", top);
		this.div.css("z-index", 101);
		this.div.fadeIn();
	};

	this.closeDialog = function() {
		this.div.fadeOut();
		$("#mask").fadeOut("slow", function(){
			$("#mask").remove();
		});
	};
};