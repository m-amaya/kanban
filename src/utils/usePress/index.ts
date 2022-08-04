import { RefObject, useEffect, useState } from "react";

export interface Props {
  defaultState?: boolean;
  isDisabled?: boolean;
}

function usePress(
  ref: RefObject<HTMLButtonElement>,
  { defaultState = false, isDisabled }: Props,
) {
  const [isPressed, setPress] = useState(defaultState);

  useEffect(() => {
    const onMouseDown = () => setPress(true);
    const onMouseUp = () => setPress(false);

    if (ref.current && !isDisabled) {
      ref.current.addEventListener("mousedown", onMouseDown);
      ref.current.addEventListener("mouseup", onMouseUp);
    }

    return () => {
      ref.current?.removeEventListener("mousedown", onMouseDown);
      ref.current?.removeEventListener("mouseup", onMouseUp);
    };
  }, [ref, isDisabled]);

  return {
    isPressed,
  };
}

export default usePress;
