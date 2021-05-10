import React from 'react';
import { renderHook } from '@testing-library/react-hooks'
import { act } from '@testing-library/react';
import { useDebounce } from '../index';

describe('useDebounce', () => {
  it('Change value after a period of time', () => {
    jest.useFakeTimers();
    const initialValue = "old";
    let {
      result,
      rerender,
    } = renderHook((newValue) => useDebounce(newValue), {
      initialProps: initialValue
    });
    expect(result.current).toEqual(initialValue);

    const newValue = "new";
    rerender(newValue);
    expect(result.current).toBe(initialValue);

    act(() => {
      jest.runAllTimers();
    });

    expect(result.current).toBe(newValue);
  });
});
