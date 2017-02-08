$( document ).ready(function(){
	alert("la bienvenue");
	console.log("du texte dans la console Js du navigateur");
	$(".clear").click(function(){
		console.log("efface");
	});
	$(".ajout").click(function(){
		$("#todoList").append($("<li>" + + "</li>"));
		console.log("ajoute");
	});
});