import React, { useState } from 'react';
import { CityWeather, Search } from 'components';
import './index.css';

export default function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleSelectCity = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="App">
      <Search onSelect={handleSelectCity} />
      { selectedCity && <CityWeather data={selectedCity} /> }
    </div>
  );
}
