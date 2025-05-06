// src/useMobile.js
import { useState, useEffect } from 'react';

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define tu tamaño de móvil
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Inicializa el valor

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}
