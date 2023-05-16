import { useState, useEffect, useRef } from 'react';

export function useDebounceValue<T>(value: T, delay = 1000) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timerRef = useRef<number | undefined>();

  useEffect(() => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debouncedValue;
}
