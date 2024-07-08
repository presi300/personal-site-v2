import { useState, useEffect } from "react";

function useWindowSize(debounceDelay = 100) {
  const isClient = typeof window === "object";

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  // Custom debounce function
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    const handleResize = debounce(() => {
      setWindowSize(getSize());
    }, debounceDelay);

    window.addEventListener("resize", handleResize);

    // Call the handler immediately to update state with initial size
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [debounceDelay, isClient]);

  return windowSize;
}

export default useWindowSize;
