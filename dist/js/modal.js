const contactLinks = document.querySelectorAll(".contact__link");
const modals = document.querySelectorAll(".modal");

// Открытие модального окна и блокировка прокрутки
contactLinks.forEach((contactLink) => {
  contactLink.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем переход по ссылке
    modals.forEach((modal) => {
      modal.classList.add("modal__open"); // Открываем модальное окно
      document.body.classList.add("modal__open"); // Блокируем прокрутку основного окна
    });
  });
});

// Закрытие модального окна и разблокировка прокрутки
modals.forEach((modal) => {
  // Закрытие при клике вне модального содержимого
  modal.addEventListener("click", (evt) => {
    if (evt.target.closest(".modal__wrapper") === null) {
      modal.classList.remove("modal__open");
      document.body.classList.remove("modal__open"); // Разблокируем прокрутку
    }
  });

  // Закрытие при клике на кнопку закрытия
  const modalClose = modal.querySelector(".modal__button");
  if (modalClose) {
    modalClose.addEventListener("click", () => {
      modal.classList.remove("modal__open");
      document.body.classList.remove("modal__open"); // Разблокируем прокрутку
    });
  }

  // Закрытие при нажатии на клавишу Esc
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" || event.key === "Esc") {
      modal.classList.remove("modal__open");
      document.body.classList.remove("modal__open"); // Разблокируем прокрутку
    }
  });
});
