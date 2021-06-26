import { useState, useEffect } from 'react';

const BREAK_POINT_MOBILE = 768;

export default function useViewport() {
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const [viewPort, setViewPort] = useState('MOBILE');

  useEffect(() => {
    const handleResize = () => {
      const wWidth = typeof window !== 'undefined' && window.innerWidth;
      const wHeight = typeof window !== 'undefined' && window.innerHeight;

      setWidth(wWidth);
      setHeight(wHeight);

      if (wWidth < BREAK_POINT_MOBILE) {
        setViewPort('MOBILE');
      } else {
        setViewPort('DESKTOP');
      }
    };
    handleResize();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize, { passive: true });
    }
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return [viewPort, width, height];
}
