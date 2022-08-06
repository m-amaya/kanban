import { FC } from "react";

import { styled } from "~/styles";
import { tokens } from "~/tokens";
import HeaderContent from "./HeaderContent";
import Logo from "./Logo";

const HeaderStyled = styled("header", {
  backgroundColor: "$white",
  borderBottom: "1px solid $linesLight",
  display: "flex",
  height: tokens.content.headerHeightMobile,
  left: 0,
  position: "absolute",
  top: 0,
  width: "100%",
  zIndex: "$header",
  "@tablet": {
    height: tokens.content.headerHeightTablet,
  },
  "@desktop": {
    height: tokens.content.headerHeightDesktop,
  },
});

const Header: FC = () => {
  return (
    <HeaderStyled>
      <Logo />
      <HeaderContent />
    </HeaderStyled>
  );
};

export default Header;
