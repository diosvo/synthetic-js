import { useEffect } from 'react';

/**
 * @param {EventMouse} handler - The function to call when the click event is detected anywhere on the document.
 *
 * @returns Nothing.
 */
export default function useClickAnywhere(handler) {
  useEffect(() => {
    window.addEventListener('click', handler);

    return () => {
      window.removeEventListener('click', handler);
    };
  }, []);
}
