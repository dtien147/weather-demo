class CityModel {
  constructor(json) {
    this.id = json.woeid;
    this.name = json.title;
    this.woeid = json.woeid;
  }
}

export default CityModel;