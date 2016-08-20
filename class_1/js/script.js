$(function(){

	// alert function 
	/*
		This is 
		multiline comment 
	*/

	// alert("Hi this first class of jquery");

	console.log("This message for console");

	jQuery("ul").css("border","1px solid red");
	jQuery("ul").children().css("border-width","2px");
	jQuery("li").parent().css("border-width","4px");

	$("ul li:nth(1)").css("border-color","green");

	// $("ul").children().children().css({"color":"yellow","background":"green"});

	// $("ul").find("a").css({"color":"yellow","background":"green"});

	$("ul").find("a").parent().prevAll().css("color","green");

	$("ul").find("a").parent().next().css("color","green");

	$("a").parents(".leftbar").css("background","rgba(0,0,0,0.2)");

	$(".leftbar").find(".active").css("color","white"); 

	//Click function 

	$(".booklist").find("a").click(function(e){

		e.preventDefault();

		$(this).parent().prevAll().children().css("color","#222");
		$(this).parent().nextAll().children().css("color","#222");
		$(this).css("color","red");

	}); 


	// animation
	


})