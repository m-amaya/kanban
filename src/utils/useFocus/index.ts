import { RefObject, useEffect, useState } from "react";

export interface Props {
  defaultState?: boolean;
  isDisabled?: boolean;
}

function useFocus(
  ref: RefObject<HTMLElement>,
  { defaultState = false, isDisabled }: Props,
) {
  const [isFocused, setFocus] = useState(defaultState);

  useEffect(() => {
    const onFocus = () => setFocus(true);
    const onBlur = () => setFocus(false);

    if (ref.current && !isDisabled) {
      ref.current.addEventListener("focus", onFocus);
      ref.current.addEventListener("blur", onBlur);
    }

    return () => {
      ref.current?.removeEventListener("focus", onFocus);
      ref.current?.removeEventListener("blur", onBlur);
    };
  }, [ref, isDisabled]);

  return {
    isFocused,
  };
}

export default useFocus;
