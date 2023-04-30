import { useState, useEffect, RefObject } from "react";

export const useMouseLocator = (ref) => {
  const [coordinates, setCoordnacoordinates] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const handleMouseMovement = ({ clientX, clientY }) => {
       const element = ref.current
      setCoordnacoordinates(() => ({
        x: clientX - element.offsetLeft - element.offsetWidth / 2,
        y: clientY - element.offsetTop - element.offsetHeight / 2,
      }));
    };

    window.addEventListener("pointermove", handleMouseMovement);
    return () => window.removeEventListener("pointermove", handleMouseMovement);
  }, []);

  return coordinates;
};
