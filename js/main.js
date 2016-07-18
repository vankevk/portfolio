$(document).ready(function () {
  //SHOWING FULL MENU
  $(".toggle").click(function(){
      $(".menu").fadeToggle();
  });

  //HAMBURGER ANIMATION
  $('.toggle').click(function(){
      $(this).toggleClass('open');
  });
});
