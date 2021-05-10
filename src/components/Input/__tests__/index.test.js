import { render } from '@testing-library/react';
import Input from '../index';

describe('Input', () => {
  it('render correctly', () => {
    const testId = 'test';
    const {
      queryByTestId,
    } = render(<Input dataTestId={testId} />);

    expect(queryByTestId(testId)).toBeInTheDocument();
  });
});
