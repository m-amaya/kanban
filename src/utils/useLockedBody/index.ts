import { useLayoutEffect } from "react";

function useLockedBody() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
}

export default useLockedBody;
