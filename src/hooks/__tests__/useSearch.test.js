import React from 'react';
import { renderHook } from '@testing-library/react-hooks'
import { useSearch } from '../index';

import * as metaweatherAPI from 'services/metaweatherAPI';

describe('useSearch', () => {
  it('return cities', async () => {
    const resp = [{
      name: '1',
      id: 2,
    }];
    const text = 'test';
    metaweatherAPI.searchLocations = jest.fn(() => resp);
    let {
      result,
      waitForNextUpdate,
    } = renderHook(() => useSearch(text));

    await waitForNextUpdate();
    expect(result.current).toEqual({
      cities: resp,
      error: '',
      loading: false,
    });
  });
});
