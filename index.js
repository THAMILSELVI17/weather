const API_KEY = '5d8ac1ccad90df925cdfd4869a048d61';
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const searchbox = document.getElementById("city-input");
const searchbtn = document.getElementById("search-btn");

const qname = document.getElementById("name");
const temp = document.getElementById("temp");
const weather = document.getElementById("weather");
const humi = document.getElementById("humidity");
const press = document.getElementById("pressure");

async function fetchWeather(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: Unable to fetch weather data`);
    }

    const info = await response.json();
    updateUI(info);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Failed to fetch weather data. Please check the city name or try again later.");
  }
}

function updateUI(info) {
  qname.textContent = info.name;
  temp.textContent = info.main.temp.toFixed(1); // Temperature (rounded to 1 decimal place)
  humi.textContent = info.main.humidity; // Humidity
  press.textContent = info.main.pressure; // Pressure
  weather.textContent = info.weather[0].description.toUpperCase(); // Weather description
}

async function searchCityWeather() {
  const city = searchbox.value.trim();

  if (!city) {
    alert("Please enter a valid city name.");
    return;
  }

  console.log(`Fetching weather for: ${city}`); // Log the city name
  const url = `${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`;
  await fetchWeather(url);
}

searchbtn.addEventListener("click", searchCityWeather);

function getCurrentLocationWeather() {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude: lat, longitude: lon } = position.coords;
      console.log(`Fetching weather for current location: lat=${lat}, lon=${lon}`); // Log the location
      const url = `${BASE_URL}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      await fetchWeather(url);
    },
    (error) => {
      console.error("Error fetching location:", error);
      alert("Unable to retrieve your location.");
    }
  );
}

// Fetch weather for the current location on page load
getCurrentLocationWeather();
