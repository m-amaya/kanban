import { FC } from "react";

import { styled } from "~/styles";
import { tokens } from "~/tokens";
import BoardNav from "./BoardNav";
import ThemeControl from "./ThemeControl";

const Aside = styled("aside", {
  backgroundColor: "$white",
  borderRadius: 8,
  width: 264,
  "@tablet": {
    borderRadius: 0,
    borderRight: "1px solid $linesLight",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: tokens.content.sidebarWidthTablet,
  },
  "@desktop": {
    width: tokens.content.sidebarWidthDesktop,
  },
});

const Sidebar: FC = () => {
  return (
    <Aside>
      <BoardNav />
      <ThemeControl />
    </Aside>
  );
};

export default Sidebar;
