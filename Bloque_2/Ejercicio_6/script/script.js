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


	function RandomFunction(MaxValue, MinValue) {
		return Math.round(Math.random() * (MaxValue - MinValue) + MinValue);
	}


});
