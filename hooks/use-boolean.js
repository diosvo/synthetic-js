import { useCallback, useState } from 'react';

/**
 * @description An optimized version of the useBoolean hook.
 */
export default function useBoolean(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  return { value, setTrue, setFalse };
}
