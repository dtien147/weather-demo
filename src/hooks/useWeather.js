import { useState, useEffect } from 'react';
import { getDailyWeatherData } from 'services/metaweatherAPI';

/**
 * Get daily weather
 * @param {number} woeid
 */
export default function useWeather(woeid) {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState('')
  const [error, setError] = useState('');

  const fetchData = async (woeid) => {
    try {
      setError('')
      setLoading(true);
      const weatherData = await getDailyWeatherData(woeid);
      setWeatherData(weatherData);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchData(woeid);
  }, [woeid]);

  return {
    loading,
    weatherData,
    error,
  }
}