import { useState } from 'react';

/**
 * @param defaultValue - The default value to return when state is `null` or `undefined`.
 * @param initialValue - The initial value of the state. This argument should be the same as the first argument of `useState` hook.
 *
 * @returns The default value when state is `null` or `undefined`.
 */
export default function useDefault(defaultValue, initialValue) {
  const [value, setValue] = useState(initialValue);

  if (value == null) {
    return [defaultValue, setValue];
  }

  return [value, setValue];
}
