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
function addRemoveBox(){
  console.log('in addRemoveBox');
  var addBox = true; // assume that a box is being added
  var boxColor; // declaring variable for later use

  if ($(this).data('color')==='random'){
    var colorArray = ['red', 'yellow', 'green', 'blue'];
    var randomColor = Math.floor(Math.random()*4);
    boxColor = colorArray[randomColor];
  } else {
    // get color of button clicked
    boxColor = $(this).data('color');
  }

  if ($(this).hasClass('color-button')){
    // add box of boxColor to the boxPlayground
    $('#boxPlayground').append('<div class="clickable color-cube '+boxColor+
    '" data-color="'+boxColor+'"></div>');
  } else {
    // arriving here means that a box was clicked and not a button
    addBox = false; // change flag because box is being removed
    // remove the clicked box
    $(this).remove();
  }
  // call function to update the count
  updateCount(boxColor, addBox);
}

function updateCount(thisColor, addingBox){
  if (addingBox) {
    // increment the count of a specific color
    boxCount[thisColor]++;
  } else {
    // decrement the count of a specific color
    boxCount[thisColor]--;
  }

  // display new count on DOM
  $('#'+thisColor).html('Total '+thisColor+': '+boxCount[thisColor]);
}

/// == JavaScript == ///
$(document).ready(function(){
  console.log('Document ready!');

  // call addRemoveBox whenever something .clickable is clicked
  $('body').on('click','.clickable',addRemoveBox);
}); // end document ready
