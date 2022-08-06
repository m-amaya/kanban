import { FC } from "react";

import { styled } from "~/styles";
import { tokens } from "~/tokens";
import { useMediaQuery } from "~/utils";
import { Board } from "./board";
import { Sidebar } from "./sidebar";

const ContentStyled = styled("div", {
  height: "100vh",
  display: "flex",
  paddingTop: tokens.content.headerHeightMobile,
  "@tablet": {
    paddingTop: tokens.content.headerHeightTablet,
  },
  "@desktop": {
    paddingTop: tokens.content.headerHeightDesktop,
  },
});

const Content: FC = () => {
  const { isGteTablet } = useMediaQuery();

  return (
    <ContentStyled>
      {isGteTablet && <Sidebar />}
      <Board />
    </ContentStyled>
  );
};

export default Content;
