import { FC } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useBoardStore } from "~/store";

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
  const { board } = useBoardStore();
  const onDragEnd = () => null;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Main>
        {board && board.columns && board.columns.length ? (
          board.columns.map((column, idx) => <Column key={idx} data={column} />)
        ) : (
          <div>Empty</div>
        )}
      </Main>
    </DragDropContext>
  );
};

export default Board;
