import React from 'react';
import axios from 'axios';
import { searchLocations, getDailyWeatherData } from '../metaweatherAPI';

const searchData = [{
  name: 'test',
  id: 1,
}];

const weatherData = [{
  name: 'test',
  id: 1,
}];

jest.mock('axios', () => ({
  create: () => ({
    get: (apiUrl) => {
      if (apiUrl.includes('search')) {
        return {
          data: searchData,
        };
      }

      return {
        data: {
          consolidated_weather: weatherData
        },
      };
    }
  }),
}));

describe('metaweatherAPI', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('searchLocations', () => {
    it('return null', async () => {
      const data = await searchLocations('');
      expect(data).toBeNull();
    });

    it('return data', async () => {
      const data = await searchLocations('test');
      expect(data).toHaveLength(searchData.length);
    });
  });

  describe('getDailyWeatherData', () => {
    it('return data', async () => {
      const data = await getDailyWeatherData('test');
      expect(data).toHaveLength(weatherData.length);
    });
  });
});
