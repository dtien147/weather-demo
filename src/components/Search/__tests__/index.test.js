import { render, waitFor, fireEvent } from '@testing-library/react';
import { Search, SelectListItem } from 'components';
import * as metaweatherAPI from '../../../services/metaweatherAPI';

describe('Search', () => {
  it('render correctly', async () => {
    const {
      queryByTestId,
    } = render(<Search />);

    const searchInput = queryByTestId('search-input');

    expect(searchInput).toBeInTheDocument();
  });

  it('render select list after input text and clear input when select city', async () => {
    const onSelect = jest.fn();
    const resp = [{
      name: '1',
      id: 2,
    }];
    metaweatherAPI.searchLocations = jest.fn(() => resp);

    const {
      queryByText,
      queryByTestId,
    } = render(<Search onSelect={onSelect} />);

    const searchInput = queryByTestId('search-input');

    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'test' }});

    await waitFor(() =>
      expect(queryByText(resp[0].name)).toBeInTheDocument()
    );

    const selectListItem = queryByTestId(SelectListItem.testId);
    fireEvent.click(selectListItem);

    await waitFor(() =>
      expect(searchInput.value).toBe('')
    );
    expect(onSelect).toBeCalled();
  });

  it('render error message', async () => {
    const error = 'error test';
    const onSelect = jest.fn();
    const resp = [{
      name: '1',
      id: 2,
    }];
    metaweatherAPI.searchLocations = jest.fn(() => {
      throw new Error(error)
    });

    const {
      queryByText,
      queryByTestId,
    } = render(<Search onSelect={onSelect} />);

    const searchInput = queryByTestId('search-input');

    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'test' }});

    await waitFor(() =>
      expect(queryByText(error)).toBeInTheDocument()
    );
    expect(metaweatherAPI.searchLocations).toBeCalled();
  });
});
