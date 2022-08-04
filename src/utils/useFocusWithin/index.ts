import { RefObject, useState } from "react";

import useFocus from "~/utils/useFocus";
import useTargetBoundary from "~/utils/useTargetBoundary";

export interface Props {
  defaultState?: boolean;
  isDisabled?: boolean;
}

function useFocusWithin(
  ref: RefObject<HTMLElement>,
  { defaultState = false, isDisabled }: Props,
) {
  const [isFocusedWithin, setFocusWithin] = useState(defaultState);
  const { isFocused } = useFocus(ref, { defaultState, isDisabled });

  useTargetBoundary(ref, {
    isDisabled,
    onMouseDownInside: () => setFocusWithin(true),
    onMouseDownOutside: () => setFocusWithin(false),
  });

  return {
    isFocusedWithin: isFocusedWithin || isFocused,
  };
}

export default useFocusWithin;
