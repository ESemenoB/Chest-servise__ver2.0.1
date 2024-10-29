const swiper = new Swiper(".swiper-container", {
  // Опции Swiper
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    modifierClass: "custom-pagination-",
  },
  autoplay: {
    delay: 3000, // Задержка в миллисекундах (3000 = 3 секунды)
    disableOnInteraction: false, // Не останавливать автопрокрутку при взаимодействии (например, при нажатии на стрелки)
  },

  loop: true, // Зацикленное переключение слайдов
});
