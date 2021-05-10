import { render, fireEvent, waitFor } from '@testing-library/react';
import { Search, CityWeather, SelectListItem } from 'components';
import * as metaweatherAPI from 'services/metaweatherAPI';
import App from '../index';

describe('App', () => {
  it('render search', () => {
    const { queryByTestId } = render(<App />);

    expect(queryByTestId(Search.testId)).toBeInTheDocument();
    expect(queryByTestId(CityWeather.testId)).not.toBeInTheDocument();
  });

  it('render city weather', async () => {
    const {
      queryByTestId,
      queryByText,
      getByTestId,
    } = render(<App />);

    const searchResp = [{
      name: '1',
      id: 2,
    }];
    const weatherResp = [{
      id: 2,
      minTemp: 1,
      maxTemp: 3,
    }];
    metaweatherAPI.searchLocations = jest.fn(() => searchResp);
    metaweatherAPI.getDailyWeatherData = jest.fn(() => weatherResp);

    fireEvent.change(getByTestId('search-input'), { target: { value: 'test' }});
    await waitFor(() =>
      expect(queryByText(searchResp[0].name)).toBeInTheDocument()
    );
    expect(metaweatherAPI.searchLocations).toBeCalled();

    fireEvent.click(getByTestId(SelectListItem.testId));

    await waitFor(() =>
      expect(queryByText(`Min: ${weatherResp[0].minTemp}`)).toBeInTheDocument()
    );

    expect(queryByTestId(Search.testId)).toBeInTheDocument();
    expect(queryByTestId(CityWeather.testId)).toBeInTheDocument();
  });
});
