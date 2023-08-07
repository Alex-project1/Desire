$(function () {
  const btnClose = document.querySelector('.rightside-menu__close');
  const btnOpen = document.querySelector('.header__btn');

  btnClose.addEventListener('click', function () {
    document.querySelector('.rightside-menu ').style =
      'transform: translateX(102%);';
  });

  btnOpen.addEventListener('click', function () {
    document.querySelector('.rightside-menu ').style =
      'transform: translateX(0);';
  });

  $('.top__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
  });

  $('.contact-slider').slick({
    slidesToShow: 10,
    slidesToScroll: 10,
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
  });
  var mixer = mixitup('.gallery__inner', {
    load: {
      filter: '.living-room',
    },
  });
});
