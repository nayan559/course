

$(document).ready(function () {
  $.fakeLoader({
      timeToHide:1500,
      bgColor:"#fff",
      spinner:"spinner6"
  });
});


// Side ber when page scrol
$("body").niceScroll({
  cursorcolor: "#df4a43",
  cursorborder: "1px solid #fff0",
  zindex: "auto" | [2000],
  scrollspeed: 200
});




/* Back to top */
$(document).ready(function() {
  var btn = $('#button');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
});


// Wow animation
new WOW().init();










 



 


 