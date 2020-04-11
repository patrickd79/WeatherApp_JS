class Weather {
  constructor(city, state) {
    this.api_key = "e2b9256ba86ee444050f70326a34bcea";
    this.city = city;
    this.state = state;
  }
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}, ${this.state}&units=imperial&appid=${this.api_key}`
    );
    //give me the json data
    const responseData = await response.json();

    return responseData;
  }
  //change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
