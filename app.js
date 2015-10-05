$(document).ready(function(){
	//var colors = ["black", "blue", "green", "red", "yellow", "orange", "magenta", "brown", "purple", "white"];
	var selectedColor;

	$(".colors div").click(function(){
		selectedColor = $(this).css("background-color");
	});

	$(".paintable").click(function(){
		$(this).css("background-color", selectedColor);
	});
});

