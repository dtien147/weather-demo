import { render, waitFor } from '@testing-library/react';
import { CityWeather } from 'components';
import * as metaweatherAPI from 'services/metaweatherAPI';
import { CityModel, WeatherModel } from 'models';

describe('CityWeather', () => {
  it('render correctly', async () => {
    const data = {
      id: 1,
      woeid: 1,
      name: 'test',
    }
    const resp = [new WeatherModel({
      id: 2,
      minTemp: 1,
      maxTemp: 3,
    })];
    metaweatherAPI.getDailyWeatherData = jest.fn(() => resp);

    const {
      queryByText,
    } = render(<CityWeather data={data} />);

    expect(queryByText(data.name)).toBeInTheDocument();

    await waitFor(() =>
      expect(queryByText(`Min: ${resp[0].minTemp}`)).toBeInTheDocument()
    );
  });

  it('render error message', async () => {
    const error = 'error test';
    const data = new CityModel({
      id: 1,
      woeid: 1,
      name: 'test',
    })
    metaweatherAPI.getDailyWeatherData = jest.fn(() => {
      throw new Error(error);
    });
    const {
      queryByText,
    } = render(<CityWeather data={data} />);

    await waitFor(() =>
      expect(queryByText(error)).toBeInTheDocument()
    );
    expect(metaweatherAPI.getDailyWeatherData).toBeCalled();
  });
});
