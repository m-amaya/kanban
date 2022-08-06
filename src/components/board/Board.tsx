import { FC } from "react";
import { styled } from "~/styles";

const Main = styled("main", {
  flex: 1,
  overflowX: "auto",
});

const Board: FC = () => {
  return <Main>Board</Main>;
};

export default Board;
