const apiKey = "7ba0862fa07349a7fa2758520592a16e";
const city = "Kalachinsk";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`;

// Объект с картинками для разных описаний
const weatherImages = {
  ясно: "./img/clear-day.webp",
  "небольшая облачность": "./img/light-cloudiness.webp",
  "переменная облачность": "./img/light-cloudiness.webp",

  пасмурно: "./img/overcast.webp",
  //   "небольшой дождь": "url/to/light-rain.jpg",
  дождь: "url/to/rain.webp",
  гроза: "url/to/thunderstorm.jpg",
  // Добавьте другие описания по необходимости
};

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
    }
    return response.json();
  })
  .then((data) => {
    if (data.main && data.weather) {
      const cityName = data.name;
      const temperature = data.main.temp;
      const description = data.weather[0].description.toLowerCase(); // Приводим к нижнему регистру
      const humidity = data.main.humidity;

      const timezoneOffset = data.timezone; // Временная зона в секундах
      const localTime = new Date(
        Date.now() + timezoneOffset * 1000
      ).toLocaleString();

      // Определяем URL изображения на основе описания
      const imageUrl = weatherImages[description] || "url/to/default.jpg";

      document.getElementById("weather").innerHTML = `
                <h2>Погода в городе: ${cityName}</h2>
                <p>Температура: ${temperature}°C</p>
                <p>Описание: ${description}</p>
                <img src="${imageUrl}" alt="${description}" width="100" height="100">
                <p>Влажность: ${humidity}%</p>
                 <p>Местное время: ${localTime}</p>
            `;
    } else {
      throw new Error("Некорректные данные от API");
    }
  })
  .catch((error) => console.error("Ошибка:", error));

// const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY; // Получаем API-ключ из переменной окружения
// const city = "Moscow";
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`;

// const weatherImages = {
//   ясно: "img/clear-sky.jpg",
//   пасмурно: "img/cloudy.jpg",
//   "небольшой дождь": "img/light-rain.jpg",
//   дождь: "img/rain.jpg",
//   гроза: "img/thunderstorm.jpg",
//   // Добавьте другие описания по необходимости
// };

// fetch(url)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     if (data.main && data.weather) {
//       const cityName = data.name;
//       const temperature = data.main.temp;
//       const description = data.weather[0].description.toLowerCase();
//       const humidity = data.main.humidity;

//       const imageUrl = weatherImages[description] || "img/default.jpg";

//       document.getElementById("weather").innerHTML = `
//                 <h2>Погода в городе: ${cityName}</h2>
//                 <p>Температура: ${temperature}°C</p>
//                 <p>Описание: ${description}</p>
//                 <p>Влажность: ${humidity}%</p>
//                 <img src="${imageUrl}" alt="${description}" width="100" height="100">
//             `;
//     } else {
//       throw new Error("Некорректные данные от API");
//     }
//   })
//   .catch((error) => console.error("Ошибка:", error));
