import { tokens } from "~/tokens";
import useWindowSize from "~/utils/useWindowSize";

function useMediaQuery() {
  const { breakpoints } = tokens;
  const { windowWidth } = useWindowSize();

  const isGteTablet = windowWidth && windowWidth >= breakpoints.tablet;
  const isGteDesktop = windowWidth && windowWidth >= breakpoints.desktop;
  const isMobile = !isGteTablet && !isGteDesktop;

  return {
    isMobile,
    isGteTablet,
    isGteDesktop,
  };
}

export default useMediaQuery;
