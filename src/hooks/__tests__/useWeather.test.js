import React from 'react';
import { renderHook } from '@testing-library/react-hooks'
import { useWeather } from '../index';

import * as metaweatherAPI from 'services/metaweatherAPI';

describe('useWeather', () => {
  it('return weather data', async () => {
    const resp = [{
      id: 2,
      minTemp: 1,
      maxTemp: 3,
    }];
    const id = 1;
    metaweatherAPI.getDailyWeatherData = jest.fn(() => resp);
    let {
      result,
      waitForNextUpdate,
    } = renderHook(() => useWeather(id));

    await waitForNextUpdate();
    expect(result.current).toEqual({
      weatherData: resp,
      error: '',
      loading: false,
    });
  });
});
