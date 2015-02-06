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

  $('#logo img').on('webkitAnimationEnd', function(e) {
    $(this).addClass('visible');
  });

  $('#enter a').on('webkitAnimationEnd', function(e) {
    $(this).addClass('visible');
  });

});

$('#enter a').on('click', function(e) {
  $('#splash').fadeOut(400);
  $('#main').fadeIn(400);
});
