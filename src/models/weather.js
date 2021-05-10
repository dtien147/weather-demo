const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

class WeatherModel {
  constructor(json) {
    this.id = json.id;
    this.date = WEEKDAYS[new Date(json.applicable_date).getDay()];
    this.minTemp = Math.trunc(json.min_temp);
    this.maxTemp = Math.trunc(json.max_temp);
  }
}

export default WeatherModel;