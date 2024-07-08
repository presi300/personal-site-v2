import { useState, useEffect, useCallback } from "react";

// Custom throttle function
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

function useCursorPosition() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Throttled event handler
  const handleMouseMove = useCallback(
    throttle((event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    }, 500), // Adjust the throttle delay as needed
    []
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return cursorPosition;
}

export default useCursorPosition;
