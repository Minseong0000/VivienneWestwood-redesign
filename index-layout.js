// header

// 내비게이션 메뉴 눌렀을 때
$('.menu').on('click', () => {
  $('.close').addClass('nav-on');
  $('.global-menu').addClass('away');
  $('.main-menu').addClass('active');
  $('.header-nav').addClass('bg');
});

$('.close').on('click', () => {
  $('.close').removeClass('nav-on');
  $('.global-menu').removeClass('away');
  $('.main-menu').removeClass('active');
  $('.header-nav').removeClass('bg');
})

$(window).on('resize', function() {
  if ($(window).width() >= 768) {
      $('.close').removeClass('nav-on');
      $('.global-menu').removeClass('away');
      $('.main-menu').removeClass('active');
  }
});