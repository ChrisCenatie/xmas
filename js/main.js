$(function() {
  sizeImage();
  $('#butterfly').hide();
  $('#butterfly').fadeIn(5000);
  $(window).resize(sizeImage);
});

function sizeImage() {
  var img = document.getElementById("butterfly");
  var height = $(window).innerHeight() * 240 / 474;
  var width = $(window).innerWidth() * 254 / 1440;
  img.height = height;
  img.width = width;
}
