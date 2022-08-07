import { FC } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useBoardStore } from "~/store";

import { styled } from "~/styles";
import { parseNumber } from "~/utils";
import Empty from "./Empty";
import Column from "./Column";
import NewColumn from "./NewColumn";

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
  const { board, moveTask } = useBoardStore();
  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return;

    moveTask(
      parseNumber(source.droppableId),
      parseNumber(destination.droppableId),
      source.index,
      destination.index,
    );
  };

  if (board && board.columns && board.columns.length) {
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Main>
          <>
            {board.columns.map((column, idx) => (
              <Column key={idx} data={column} index={idx} />
            ))}
            <NewColumn />
          </>
        </Main>
      </DragDropContext>
    );
  }

  return <Empty />;
};

export default Board;
