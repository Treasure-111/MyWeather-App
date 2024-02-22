function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}
function citySearch(city) {
  let apiKey = "49a49e1700beb1b8tfff3012doc98ac9";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function submitSearchElement(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchform-input");

  citySearch(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormEment = addEventListener("submit", submitSearchElement);
