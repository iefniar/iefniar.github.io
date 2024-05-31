import { useState, useEffect } from 'react';

const useOrientation = () => {
  const [orientation, setOrientation] = useState(null);

  useEffect(() => {
    const handleOrientationChange = () => {
      const newOrientation = window.screen.orientation.type === 'portrait-primary' ? 'portrait' : 'landscape';
      setOrientation(newOrientation);
    };

    window.addEventListener('orientationchange', handleOrientationChange);

    handleOrientationChange(); 

    return () => window.removeEventListener('orientationchange', handleOrientationChange);
  }, []);

  return orientation;
}

export default useOrientation;
