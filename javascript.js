$("#button1").on("click", function() {
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

$("#button3").on("click", function() {
	$("#box").animate({opacity:"-=0.1"}, "fast");
})

$("#button4").on("click", function() {
	$("#box").removeAttr("style");
	$("#box").removeAttr("id");
	$("div:nth-of-type(1)").attr("id", "box");
})

$("#button2").on("click", function() {
	$("#box").css("background", "blue");
})