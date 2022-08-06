import { FC } from "react";

import { styled } from "~/styles";
import BoardTab from "./BoardTab";

const Nav = styled("nav", {
  paddingTop: 16,
  paddingRight: 24,
  "@tablet": {
    paddingTop: 40,
  },
});

const Title = styled("div", {
  color: "$mediumGrey",
  fontFamily: "$jakarta",
  fontSize: 12,
  fontWeight: "$bold",
  letterSpacing: 2.4,
  lineHeight: "15px",
  marginBottom: 20,
  paddingLeft: 24,
  textTransform: "uppercase",
});

const BoardNav: FC = () => {
  return (
    <Nav>
      <Title>All Boards (3)</Title>
      <div>
        <BoardTab isActive>Platform Launch</BoardTab>
        <BoardTab>Marketing Plan</BoardTab>
        <BoardTab>Roadmap</BoardTab>
        <BoardTab isCreateNew />
      </div>
    </Nav>
  );
};

export default BoardNav;
