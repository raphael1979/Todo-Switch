$( document ).ready(function(){
	alert("la bienvenue");
	console.log("du texte dans la console Js du navigateur");
	$(".clear").click(function(){
		console.log("efface");
	});
	$(".ajout").click(function(){
		var input = $('#todoInput').val();
		$("#todoList").append($("<li>" + input + "</li>"));
		console.log("ajoute");
		$('#todoInput').val('');
	});
	$(".clear").click(function(){
		$("#todoList").empty(".clear");
	});
});