console.log('scripts.js sourced!');
/// == Global Variable Declarations == ///


/// == Function Declarations == ///
function createBox(){
  var boxColor = $(this).data('color');
  $('#boxPlayground').append('<div class="color-cube '+boxColor+'"></div>');
}

/// == JavaScript == ///

$(document).ready(function(){
  console.log('Document ready!');

  $('.color-button').on('click',createBox);
}); // end document ready
