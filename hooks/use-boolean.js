import { useCallback, useState } from 'react';

/**
 * @description An optimized version of the useBoolean hook.
 *
 * @param {boolean} initialValue
 * @return {Object} memoized methods (the same function instance is returned across re-renders)
 */
export default function useBoolean(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  // 💡 Memoize functions to avoid unnecessary re-renders

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  return { value, setTrue, setFalse };
}
