const city = document.getElementById("city");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const weatherIcon = document.getElementById("weather-icon");

const apiKey = "";

let citySearch = "Madrid";

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?&APPID=${apiKey}&units=metric&q=`;

inputSearch.focus();

const drawResults = (data) => {
  city.textContent = data.name;
  temp.textContent = `${Math.round(data.main.temp)}°C`;
  humidity.textContent = `${data.main.humidity}%`;
  wind.textContent = `${Math.round(data.wind.speed)} Km/h`;
  weatherIcon.src = `./assets/${data.weather[0].main.toLowerCase()}.png`;
};

const checkWeather = async (city) => {
  try {
    const res = await fetch(apiUrl + city);
    const data = await res.json();

    if (data.cod < 200 || data.cod >= 400) {
      throw new Error("City not found.");
    }

    console.log(data);
    drawResults(data);
  } catch (err) {
    console.error(err);
  }
};

const handleInput = (event) => {
  if (event.key === "Enter") {
    citySearch = event.target.value;
    checkWeather(citySearch);
  }
};

const handleBtn = () => {
  citySearch = inputSearch.value;
  checkWeather(citySearch);
};

document.addEventListener("DOMContentLoaded", checkWeather(citySearch));

inputSearch.addEventListener("keyup", handleInput);

btnSearch.addEventListener("click", handleBtn);
