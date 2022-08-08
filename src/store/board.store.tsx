import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import setupDb, { Board, db, getList } from "~/utils/setupDb";

type BoardList = Pick<Board, "_id" | "name">[];

interface BoardStore {
  board?: Board;
  boardList: BoardList;
  selectBoard: (_id: string) => void;
  addBoard: (newBoard: Board) => void;
  saveBoard: () => void;
  deleteBoard: (board: Board) => void;
  updateName: (name: string) => void;
  addColumn: () => void;
  updateColumn: (name: string, colIdx: number) => void;
  removeColumn: (colIdx: number) => void;
  addTask: (task: Task) => void;
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

  const addBoard = (newBoard: Board) => {
    db.put(newBoard, { force: true })
      .then(() => getList())
      .then((boards: BoardList) => setList(boards));
  };

  const saveBoard = () => {
    if (board) {
      db.put(board, { force: true })
        .then(() => getList())
        .then((boards: BoardList) => setList(boards));
    }
  };

  const deleteBoard = (board: Board) => {
    db.remove(board as any)
      .then(() => getList())
      .then((boards: BoardList) => {
        setList(boards);

        if (boards.length) {
          selectBoard(boards[0]._id);
        }
      });
  };

  const updateName = (name: string) => {
    if (board) {
      setBoard({ ...board, name });
    }
  };

  const addColumn = () => {
    if (board) {
      setBoard({
        ...board,
        columns: [...board.columns, { name: "", tasks: [] }],
      });
    }
  };

  const updateColumn = (name: string, colIdx: number) => {
    if (board && board.columns[colIdx]) {
      const columns = board.columns;
      const updatedColumn = columns[colIdx];
      updatedColumn.name = name;
      columns[colIdx] = updatedColumn;
      setBoard({ ...board, columns });
    }
  };
  const removeColumn = (colIdx: number) => {
    if (board && board.columns[colIdx]) {
      const columns = board.columns;
      columns.splice(colIdx, 1);
      setBoard({ ...board, columns });
    }
  };

  const addTask = (newTask: Task) => {
    if (board) {
      const columns = board.columns;

      columns.map((column, idx) => {
        if (column.name === newTask.status) {
          const updatedColumn = {
            ...column,
            tasks: [...column.tasks, newTask],
          };
          columns[idx] = updatedColumn;
          setBoard({ ...board, columns });
          saveBoard();
        }
      });
    }
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
      value={{
        board,
        boardList,
        selectBoard,
        addBoard,
        saveBoard,
        deleteBoard,
        updateName,
        addColumn,
        updateColumn,
        removeColumn,
        addTask,
        moveTask,
      }}
      {...props}
    />
  );
};

export const useBoardStore = () => useContext(BoardContext);
