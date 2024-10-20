// Пункты подменю
const submenuItems = document.querySelectorAll(".submenu");
const submenuToggles = document.querySelectorAll(".submenu__toggle");
submenuToggles.forEach((element) => {
  element.addEventListener("click", (evt) => {
    evt.target.closest(".submenu").classList.toggle("submenu--open");
  });
});

// Закрывает всё подменю
const closeAllSubmenuItems = () => {
  submenuItems.forEach((element) => {
    element.classList.remove("submenu--open");
  });
};

// Пункты меню
const menuToggle = document.querySelector(".menu__toggle");
menuToggle.addEventListener("click", (evt) => {
  evt.target.closest(".menu").classList.toggle("menu--open");
  closeAllSubmenuItems();
});

// // Слайдер
// let currentSlideIndex = 0;
// const heroSection = document.querySelector(".hero");
// const sliderItems = document.querySelectorAll(".slider__item");
// const sliderControls = document.querySelectorAll(".slider__radio");

// const changeCurrentSlideTo = (index) => {
//   sliderItems[currentSlideIndex].classList.remove("slider__item--active");
//   currentSlideIndex = index;
//   sliderItems[index].classList.add("slider__item--active");
//   heroSection.dataset.slide = `${index + 1}`;
// };

// sliderControls.forEach((element, index) => {
//   element.addEventListener("change", () => {
//     changeCurrentSlideTo(index);
//   });
// });
