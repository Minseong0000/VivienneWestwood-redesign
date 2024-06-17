$('.info-toggle').click(function() {
  if ($(this).hasClass('open')) {
      $(this).removeClass('open').next('.toggle-contents').slideUp();
  } else {
      $('.info-toggle').removeClass('open').next('.toggle-contents').slideUp();
      $(this).addClass('open').next('.toggle-contents').slideDown();
  }
});

let swiper = new Swiper(".imgSwiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-paggination",
    clickable: true,
  }
});

$('a[href="#"]').on('click', e => e.preventDefault());