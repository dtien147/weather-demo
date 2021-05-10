import { useState, useEffect } from 'react';

/**
 * Debounce change to a value
 * @param {any} value
 * @param {number} delay - time in ms
 * @returns {any}
 */
export default function useDebounce(value, delay = 200) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay]
  );

  return debouncedValue;
}