import { render } from '@testing-library/react';
import DayWeather from '../index';

describe('DayWeather', () => {
  it('render correctly', () => {
    const data = {
      date: 'test',
      minTemp: 100,
      maxTemp: 1000,
    }
    const {
      queryByText,
    } = render(<DayWeather data={data} />);

    expect(queryByText(data.date)).toBeInTheDocument();
    expect(queryByText(`Min: ${data.minTemp}`)).toBeInTheDocument();
    expect(queryByText(`Max: ${data.maxTemp}`)).toBeInTheDocument();
  });
});
