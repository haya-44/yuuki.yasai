$(function () {

  $('.header_nav_hum').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.hum_menu').removeClass('active');
    } else {
      $(this).addClass('active');
      $('.hum_menu').addClass('active');
    }
  });

  $('.tab_list_area').on('click', function () {
    $('.section_profile').addClass('hide');
    $('.section_shiga').removeClass('hide');
    $(this).addClass('open');
    $('.tab_list_about').removeClass('open');
    $('.tab_list_about').addClass('down');
    $(this).removeClass('down');

  });

  $('.tab_list_about').on('click', function () {
    $('.section_shiga').addClass('hide');
    $('.section_profile').removeClass('hide');
    $(this).addClass('open');
    $('.tab_list_area').removeClass('open');
    $('.tab_list_area').addClass('down');
    $(this).removeClass('down');
  });

});
