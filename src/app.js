function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement= document.querySelector("#description");
let humidityElement=document.querySelector("#humidity");
let windSpeedElement= document.querySelector("#windSpeed");
let timeElement=document.querySelector("#time");
let date= new Date(response.data.time * 1000);


  timeElement.innerHTML = formattedDate(date);
windSpeedElement.innerHTML=`${response.data.wind.speed}km/h`;
  humidityElement.innerHTML= `${response.data.temperature.humidity}%`;
  descriptionElement.innerHTML= response.data.condition.description;
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}
function formattedDate(date){
let hours=date.getHours();
let minutes= date.getMinutes();
let days =["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"];
let day= days[date.getDay()];

if(minutes<10){
  return minutes= `0${minutes}`;
}

  return `${day} ${hours}:${minutes}`;
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

citySearch("lagos");