import { useLayoutEffect, useState } from "react";

interface WindowSize {
  windowHeight?: number;
  windowWidth?: number;
}

function useWindowSize(): WindowSize {
  if (typeof window === "undefined") {
    return { windowWidth: undefined, windowHeight: undefined };
  }

  const [windowSize, setWindowSize] = useState({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
  });

  useLayoutEffect(() => {
    const onResize = () =>
      setWindowSize({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
      });
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
