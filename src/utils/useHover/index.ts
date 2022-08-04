import { RefObject, useEffect, useState } from "react";

export interface Props {
  defaultState?: boolean;
  isDisabled?: boolean;
}

function useHover(
  ref: RefObject<HTMLElement>,
  { defaultState = false, isDisabled }: Props,
) {
  const [isHovered, setHover] = useState(defaultState);

  useEffect(() => {
    const onMouseEnter = () => setHover(true);
    const onMouseLeave = () => setHover(false);

    if (ref.current && !isDisabled) {
      ref.current.addEventListener("mouseenter", onMouseEnter);
      ref.current.addEventListener("mouseleave", onMouseLeave);
    }

    return () => {
      ref.current?.removeEventListener("mouseenter", onMouseEnter);
      ref.current?.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [ref, isDisabled]);

  return {
    isHovered,
  };
}

export default useHover;
