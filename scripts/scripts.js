console.log('scripts.js sourced!');
/// == Global Variable Declarations == ///
// using an object to track color counts in order to dynamically access them
var boxCount = {
  red: 0,
  yellow: 0,
  green: 0,
  blue: 0
};

/// == Function Declarations == ///
function createBox(){
  console.log('in createBox');
  // get color of button clicked
  var boxColor = $(this).data('color');
  // add box of boxColor to the boxPlayground
  $('#boxPlayground').append('<div class="color-cube '+boxColor+'"></div>');
  // call function to update the count
  updateCount(boxColor);
}

function updateCount(newColor){
  // increment the count of a specific color
  boxCount[newColor]++;
  // display new count on DOM
  $('#'+newColor).html('Total '+newColor+': '+boxCount[newColor]);
}

/// == JavaScript == ///
$(document).ready(function(){
  console.log('Document ready!');

  // call createBox whenever a color-button is clicked
  $('.color-button').on('click',createBox);
}); // end document ready
