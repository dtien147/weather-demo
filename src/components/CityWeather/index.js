import React from 'react';
import { useWeather } from 'hooks';
import DayWeather from '../DayWeather';
import './index.css';

const TEST_ID = 'city-weather';

export default function CityWeather(props) {
  const {
    data
  } = props;

  const {
    woeid,
    name,
  } = data;

  const {
    error,
    loading,
    weatherData,
  } = useWeather(woeid);

  return (
    <div className="city-weather" data-testid={TEST_ID}>
      <div className="city-name">{name}</div>
      {error && !loading && <div className="error-message">
        {error}
      </div>}
      <div className="city-weather-data">
        {!loading && weatherData && weatherData.map(item => (
          <DayWeather key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

CityWeather.testId = TEST_ID;
