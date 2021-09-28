$(function () {

  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    pauseOnHover: false,
    cssEase: 'ease',
  });

});

$(function(){

  $('.header_nav_hum').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.hum_menu').removeClass('active');
    } else {
      $(this).addClass('active');
      $('.hum_menu').addClass('active');
    }
  });

});