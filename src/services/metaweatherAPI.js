import axios from 'axios';
import { CityModel, WeatherModel } from 'models';

const instance = axios.create({
  // I have 301 and CORS issues with location's weather data api so I use a proxy server to bypass it
  baseURL: 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/',
});

/**
 * Search locations by text
 * @param {string} text
 */
export async function searchLocations(text) {
  if (!text) {
    return null;
  }

  const res = await instance.get(`location/search/?query=${text}`);
  return res.data.map(item => new CityModel(item));
}

/**
 * Get daily weather data of a place with woeid
 * @param woeid Where On Earth ID (Can get it from search api)
 */
export async function getDailyWeatherData(woeid) {
  const res = await instance.get(`location/${woeid}`);
  return res.data.consolidated_weather.map(item => new WeatherModel(item));
}