import { render } from '@testing-library/react';
import SelectListItem from '../index';

describe('SelectListItem', () => {
  it('render correctly', () => {
    const data = {
      name: 'test',
    }
    const {
      queryByText,
    } = render(<SelectListItem data={data} />);

    expect(queryByText(data.name)).toBeInTheDocument();
  });
});
