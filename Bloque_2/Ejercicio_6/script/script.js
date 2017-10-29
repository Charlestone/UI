$(document).ready(function(){
	/*$('#my-memorygame').quizyMemoryGame({
	itemWidth: 156,
	itemHeight: 156, 
	itemsMargin:40, 
	colCount:5, 
	animType:'flip', 
	flipAnim:'tb', 
	animSpeed:250, 
	resultIcons:true

	});*/

	$(".carta").flip({
		trigger: 'click'


	});

	var imagenes = new Array("./img/corzo.png", "./img/ardilla.png", "./img/dalmata.png",
		"./img/delfin.png", "./img/focas.png", "./img/gato.png", "./img/corzo.png", "./img/pajaro.png",
		"./img/pez.png", "./img/tucan.png", "./img/zorro.png", "./img/corzo.png");

	var milisegundos = 2000;
	var siguiente = 0;

	function temporizador(){
		$(".imagenes").attr("src", imagenes[siguiente]);
		$(".imagenes")slideDown(1000).delay(1000).fadeIn(1000);
		$(".imagenes").fadeOut(1500).delay(500).slideUp(1000, function(){
			timer = setTimeout('temporizador()', milisegundos);
		}

	}


	/*var tiempodejuego = $("#tiempodejuego").val();
	setTimeout(function() {
      
    }, $(tiempodejuego);
*/


});
