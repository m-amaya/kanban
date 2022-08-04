import { RefObject, useState } from "react";

import useTargetBoundary from "~/utils/useTargetBoundary";

export interface Props {
  defaultState?: boolean;
  isDisabled?: boolean;
}

function usePressWithin(
  ref: RefObject<HTMLButtonElement>,
  { defaultState = false, isDisabled }: Props,
) {
  const [isPressedWithin, setPressWithin] = useState(defaultState);

  useTargetBoundary(ref, {
    isDisabled,
    onMouseDownInside: () => setPressWithin(true),
    onMouseUpInside: () => setPressWithin(false),
  });

  return {
    isPressedWithin,
  };
}

export default usePressWithin;
