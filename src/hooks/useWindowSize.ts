import { useEffect, useState } from "react";

// Define the type for window size
type WindowSize = {
  width: number | undefined;
  height: number | undefined;
};

// Debounce function
function debounce(fn: (...args: any[]) => void, delay: number) {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const debounceResize = debounce(handleResize, 100);

    window.addEventListener("resize", debounceResize);
    handleResize();

    return () => window.removeEventListener("resize", debounceResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
