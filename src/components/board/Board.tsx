import { FC } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { styled } from "~/styles";
import Column from "./Column";

const Main = styled("main", {
  display: "grid",
  gridAutoColumns: 280,
  gridAutoFlow: "column",
  gap: 24,
  flex: 1,
  overflowX: "auto",
  padding: 24,
});

const Board: FC = () => {
  const onDragEnd = () => null;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Main>
        <Column />
        <Column />
        <Column />
      </Main>
    </DragDropContext>
  );
};

export default Board;
