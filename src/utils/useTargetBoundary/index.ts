import { RefObject, useLayoutEffect } from "react";

export interface OptProps {
  isDisabled?: boolean;
  onMouseDownInside?: EventListener;
  onMouseDownOutside?: EventListener;
  onMouseUpInside?: EventListener;
  onMouseUpOutside?: EventListener;
}

function useTargetBoundary(
  ref: RefObject<HTMLElement>,
  {
    isDisabled,
    onMouseDownInside,
    onMouseDownOutside,
    onMouseUpInside,
    onMouseUpOutside,
  }: OptProps,
) {
  useLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mouseDownListener: EventListener = (e) => {
      if (onMouseDownInside && ref.current?.contains(e.target as Node)) {
        onMouseDownInside(e);
        return;
      }

      if (onMouseDownOutside) {
        onMouseDownOutside(e);
      }
    };

    const mouseUpListener: EventListener = (e) => {
      if (onMouseUpInside && ref.current?.contains(e.target as Node)) {
        onMouseUpInside(e);
        return;
      }

      if (onMouseUpOutside) {
        onMouseUpOutside(e);
      }
    };

    if (!isDisabled) {
      window.addEventListener("mousedown", mouseDownListener);
      window.addEventListener("mouseup", mouseUpListener);
    }

    return () => {
      window.removeEventListener("mousedown", mouseDownListener);
      window.removeEventListener("mouseup", mouseUpListener);
    };
  }, [
    ref,
    onMouseDownInside,
    onMouseDownOutside,
    onMouseUpInside,
    onMouseUpOutside,
    isDisabled,
  ]);
}

export default useTargetBoundary;
