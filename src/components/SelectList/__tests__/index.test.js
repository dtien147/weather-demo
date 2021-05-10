import { render } from '@testing-library/react';
import { SelectList, SelectListItem } from 'components';

describe('SelectList', () => {
  it('render correctly', () => {
    const data = [{
      id: 1,
      name: 'test',
    }, {
      id: 2,
      name: 'test 2',
    }]
    const {
      queryByText,
      queryAllByTestId,
    } = render(<SelectList data={data} />);

    expect(queryByText(data[0].name)).toBeInTheDocument();
    expect(queryAllByTestId(SelectListItem.testId).length).toBe(data.length);
  });
});
