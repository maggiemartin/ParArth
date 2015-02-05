console.log('The Iron Yard Rocks');

// $(document).ready(function() {
//   $('.header').on('webkitAnimationEnd', function(e) {
//     $(this).addClass('visible');
//   });
// });

$(document).ready(function() {
  $('.quote').on('webkitAnimationEnd', function(e) {
    $(this).addClass('visible');
  });
});

$(document).ready(function() {
  $('#logo img').on('webkitAnimationEnd', function(e) {
    $(this).addClass('visible');
  });
});
