$(document).ready(function(){
	for(var i = 0; i < 256; i++){
		$('.grid').append('<div class="grid-box"></div>');
	}
	
	function getOption(){
		return $('input:checked').val();
	}
	
	function addHoverEvent(option){
		$('.grid-box').on('mouseover', function(){
			switch (option){
				case 'standard':
					$(this).css("background-color", "#3947e6");
					break;
				case 'rando':
					var color = "#" + (Math.floor(Math.random() * 10)) + (Math.floor(Math.random() * 10)) + (Math.floor(Math.random() * 10));
					$(this).css("background-color", color);
					break;
				case 'shade':
					$(this).css("opacity", '+=.1');
					break;
				case 'trail':
					$(this).animate({
						opacity: 1
					},200);
					/*$(this).on('mouseout', function(){
						$(this).animate({
						opacity: 0
					}, 200);
			});*/
					break;
			}
		});
	}
	
	$('button').on('click', function(e){
		e.preventDefault();
		$('.grid-box').remove();
		var size = prompt("What size grid do want?");
		var gridSize = size * size;
		var boxSize = 480/size;
		for(var i = 0; i < gridSize; i++){
		$('.grid').append('<div class="grid-box"></div>');
		}
		var option = getOption();
		if (option === 'shade') {
			$('.grid-box').css({
				'background-color': 'black',
				'opacity': '0'
			});
		} else if (option === 'trail'){
			$('.grid-box').css({
				'background-color': '#333',
				'opacity': '0'
			});
			$('grid-box').on('mouseout', function(){
				$(this).animate({
					opacity: 0
				}, 500);
			});
		} else {
			$('.grid-box').css({
				'background-color': 'white',
				'opacity': '1'
			});
		}
		$('.grid-box').width(boxSize + "px").height(boxSize + "px");
		addHoverEvent(option);
	});
	
	addHoverEvent(getOption());
});