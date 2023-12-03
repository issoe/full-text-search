/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handle = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(handle);
    };
  }, [value]);

  return debouncedValue;
};
