import { FC } from "react";

import { styled } from "~/styles";
import { tokens } from "~/tokens";

const Aside = styled("aside", {
  "@tablet": {
    borderRight: "1px solid $linesLight",
    width: tokens.content.sidebarWidthTablet,
  },
  "@desktop": {
    width: tokens.content.sidebarWidthDesktop,
  },
});

const Sidebar: FC = () => {
  return <Aside>Sidebar</Aside>;
};

export default Sidebar;
