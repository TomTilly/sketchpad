/**

Author: Tom Tillistrand
Date: June, 2015
Description: This script contains the major functionality for a virtual sketchpad. Users can draw by hovering their mouse over a sketchpad of boxes (div elements), causing them to change color. The user can change the dimensions of the sketchpad and the effect used when drawing on the sketchpad.

*/

$(document).ready(function(){
	
	// Initialize sketchpad by adding 16x16 sketchpad of boxes
	
	for(var i = 0; i < 256; i++){
		$('.sketchpad').append('<div class="pixels"></div>');
	}
	
	// Check which hover effect option the user has selected
	
	function getOption(){
		return $('input:checked').val();
	}
	
	/* 
	
	Description: Depending on the effect chosen by the user, this function sets the corresponding CSS styles and event handlers on the sketchpad divs to enable the hover effect.
	Parameter: option - The hover effect option selected by the user
	
	*/
	
	function addHoverEvent(option){
		switch (option){
			
			// If user has selected the "Standard" option
			
			case 'standard':
				$('.pixels').css({
					'background-color': 'white',
					'opacity': '1'
				});
				$('.pixels').on('mouseover', function(){
					$(this).css("background-color", "#3947e6");
				});
				break;
				
			// If user has selected the "Random Colors" option
				
			case 'rando':
				$('.pixels').css({
					'background-color': 'white',
					'opacity': '1'
				});
				$('.pixels').on('mouseover', function(){
					var color = "#" + (Math.floor(Math.random() * 10)) + (Math.floor(Math.random() * 10)) + (Math.floor(Math.random() * 10));
					$(this).css("background-color", color);
				});
				break;
				
			// If user has selected the "Shading" option
				
			case 'shade':
				$('.pixels').css({
					'background-color': 'black',
					'opacity': '0'
				});
				$('.pixels').on('mouseover', function(){
					$(this).css("opacity", '+=.1');
				});
				break;
				
			// If user has selected the "Fade" option
				
			case 'fade':
				$('.pixels').css({
					'background-color': '#333',
					'opacity': '0'
				});
				$('.pixels').on('mouseover', function(){
					$(this).animate({
					opacity: 1
					}, 200);
				});
				$('.pixels').on('mouseout', function(){
					$(this).animate({
					opacity: 0
					}, 200);
				});
				break;
		}
	}
	
	// Set event handler on "Reset" button for when it's clicked.
	
	$('button').on('click', function(e){
		$('.sketchpad').html('').hide();						// Clear the sketchpad of all pixels (divs) and hide sketchpad temporarily
		// Prompt user for new dimensions
		var size = prompt("Enter a resolution for the sketchpad (for a sketchpad with the dimensions 30 x 30, enter the number '30')");
		for(var i = 0; i < size.length; i++){					// Validate user input to check to see if text was entered
			if (size[i] !== '0' && size[i] !== '1' && size[i] !== '2' && size[i] !== '3' && size[i] !== '4' && size[i] !== '5' && size[i] !== '6' && size[i] !== '7' && size[i] !== '8' && size[i] !== '9'){
				size = 'Not a number';
				break;
			}
		}
		
		if (size < 1 || size > 100){								// Did the user enter a number below 1 or above 100?
			$('.sketchpad').html('<p class="center">Please enter a number from 1 to 100</p>').show();
		} else if(size === 'Not a number'){							// Did the user enter text?
			$('.sketchpad').html('<p class="center">Please enter a valid number</p>').show();
		} else {													// User entry is acceptable, create new sketchpad with new resolution and drawing style
			var sketchpadSize = size * size;						// Number of boxes in new sketchpad
			var boxSize = 480/size;									// Actual pixel size of each box in new sketchpad
			for(var i = 0; i < sketchpadSize; i++){					// Add boxes to sketchpad
				$('.sketchpad').append('<div class="pixels"></div>');
			}
			$('.pixels').width(boxSize + "px").height(boxSize + "px");	// Set new pizel size for each box
			addHoverEvent(getOption());								// Call addHoverEvent to set a hover effect on each box
			$('.sketchpad').show();									// Redisplay sketchpad now that it has been recreated
		}
	});

	addHoverEvent(getOption());										// Set initial hover effect on each box
});