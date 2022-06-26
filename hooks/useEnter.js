import { useEffect } from 'react';

/**
 * useEnter hook
 * @param {function} onKeyDown - Handling onEsc event
 */
export default function useEnter(onKeyDown) {
  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.keyCode === 13) {
        onKeyDown();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [onKeyDown]);
}
