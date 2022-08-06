import { FC } from "react";

import logoDarkUrl from "~/assets/logo-dark.svg";
import logoLightUrl from "~/assets/logo-light.svg";
import { useThemeStore } from "~/store";
import { styled } from "~/styles";
import { tokens } from "~/tokens";
import { useMediaQuery } from "~/utils";

const LogoStyled = styled("div", {
  alignItems: "center",
  display: "flex",
  "@tablet": {
    borderRight: "1px solid $lines",
    paddingLeft: 26,
    width: tokens.content.sidebarWidthTablet,
  },
  "@desktop": {
    paddingLeft: 34,
    width: tokens.content.sidebarWidthDesktop,
  },
});

const Logo: FC = () => {
  const { isMobile } = useMediaQuery();
  const { isDarkTheme } = useThemeStore();

  if (isMobile) {
    return null;
  }

  return (
    <LogoStyled>
      <img src={isDarkTheme ? logoLightUrl : logoDarkUrl} />
    </LogoStyled>
  );
};

export default Logo;
