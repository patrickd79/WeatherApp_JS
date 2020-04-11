class UI {
  constructor() {
    this.location = document.getElementById("weather-location");
    this.description = document.getElementById("weather-description");
    this.string = document.getElementById("weather-string");
    this.icon = document.getElementById("weather-icon");
    this.detailsUL = document.getElementById("weather-details");
    this.humidity = document.getElementById("weather-humidity");
    this.pressure = document.getElementById("weather-pressure");
    this.feelsLike = document.getElementById("weather-feels-like");
    this.windSpeed = document.getElementById("weather-wind-speed");
    this.windDirection = document.getElementById("weather-wind-direction");
  }
  paint(weather) {
    this.location.textContent = weather.name;
    //this.description.textContent = weather.weather;
    this.string.textContent = weather.main.temp;
    //this.icon.textContent = weather.weather.icon;
    //this.detailsUL.textContent = weather.weather.description;
    this.humidity.textContent = ` Humidity:  ${weather.main.humidity}`;
    this.pressure.textContent = `Barometric Pressure:  ${weather.main.pressure} mbar/hPa`;
    this.feelsLike.textContent = `Feels like:  ${weather.main.feels_like}`;
    this.windSpeed.textContent = `Wind speed:  ${weather.wind.speed}`;
    this.windDirection.textContent = `Wind direction:  ${weather.wind.deg}`;
  }
}
