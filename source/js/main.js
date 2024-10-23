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
