////////////// swiper

// import Swiper from "swiper";
// import "swiper/swiper-bundle.css";

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
  //   breakpoints: {
  //     // Когда ширина окна 768px и больше (обычное разрешение для планшетов)
  //     768: {
  //       slidesPerView: 2, // Показывать 2 слайда
  //       spaceBetween: 10, // Увеличить расстояние между слайдами
  //     },
  //     // Можно задать другие разрешения
  //     1024: {
  //       slidesPerView: 3, // Например, 3 слайда на более широких экранах
  //       spaceBetween: 30,
  //     },
  //   },
});
