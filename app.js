// init storage class
const storage = new Storage();
//get location from storage
const weatherLocation = storage.getLocationData();
//instantiate weather class
const weather = new Weather(weatherLocation.city, weatherLocation.state);
//init ui
const ui = new UI();

console.log(weather.getWeather());
//weather.changeLocation("Miami", "Florida");

//change location modal
document.getElementById("weather-change-btn").addEventListener("click", e => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  //change location
  weather.changeLocation(city, state);
  //set local storage to new city and state
  storage.setLocationData(city, state);
  // get new weather info
  getWeather();

  //close modal(using Jquery)
  $("#locationModal").modal("hide");
});

//run getWeather func on DOM load
document.addEventListener("DOMContentLoaded", getWeather);
function getWeather() {
  weather
    .getWeather()
    .then(results => ui.paint(results))
    .catch(error => console.log(error));
}
