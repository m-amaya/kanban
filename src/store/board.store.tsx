import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import setupDb, { Board, db } from "~/utils/setupDb";

type BoardList = Pick<Board, "_id" | "name">[];

interface BoardStore {
  board?: Board;
  boardList: BoardList;
  selectBoard: (_id: string) => void;
  moveTask: (
    startCol: number,
    endCol: number,
    srcIdx: number,
    destIdx: number,
  ) => void;
}

const BoardContext = createContext({} as BoardStore);

export const BoardProvider: FC<PropsWithChildren> = (props) => {
  const dbRef = useRef({ initialized: false });
  const [board, setBoard] = useState<Board>();
  const [boardList, setList] = useState<BoardList>([]);

  useEffect(() => {
    if (!dbRef.current.initialized) {
      dbRef.current.initialized = true;
      setupDb().then((boards: BoardList) => {
        setList(boards);

        if (boards.length) {
          selectBoard(boards[0]._id);
        }
      });
    }
  }, []);

  const selectBoard = (_id: string) => {
    db.get(_id)
      .then((board) => setBoard(board))
      .catch((error) => console.error(error));
  };

  const moveTask = (
    startCol: number,
    endCol: number,
    srcIdx: number,
    destIdx: number,
  ) => {
    if (
      board &&
      board.columns &&
      board.columns.length &&
      board.columns[startCol] &&
      board.columns[startCol].tasks &&
      board.columns[endCol] &&
      board.columns[endCol].tasks
    ) {
      if (startCol === endCol) {
        // move task within same column
        const columns = board.columns;
        const column = columns[startCol];
        const { tasks } = column;
        const updatedTasks = tasks.filter((_, idx) => idx !== srcIdx);
        updatedTasks.splice(destIdx, 0, tasks[srcIdx]);
        const newColumn = { ...column, tasks: updatedTasks };
        columns[startCol] = newColumn;
        const newBoard = { ...board, columns };

        setBoard(newBoard);
        db.put(newBoard, { force: true }).catch((error) => console.log(error));
      } else {
        // move task to another column
        const columns = board.columns;
        const startColumn = columns[startCol];
        const filteredTasks = startColumn.tasks.filter(
          (_, idx) => idx !== srcIdx,
        );
        const newStartColumn = { ...startColumn, tasks: filteredTasks };
        const endColumn = columns[endCol];
        const updatedEndTasks = endColumn.tasks;
        updatedEndTasks.splice(destIdx, 0, startColumn.tasks[srcIdx]);
        const newEndColumn = { ...endColumn, tasks: updatedEndTasks };
        columns[startCol] = newStartColumn;
        columns[endCol] = newEndColumn;
        const newBoard = { ...board, columns };

        setBoard(newBoard);
        db.put(newBoard, { force: true }).catch((error) => console.log(error));
      }
    }
  };

  return (
    <BoardContext.Provider
      value={{ board, boardList, selectBoard, moveTask }}
      {...props}
    />
  );
};

export const useBoardStore = () => useContext(BoardContext);
