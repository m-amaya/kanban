import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { genKey } from "~/utils";

interface NewBoardStore {
  newBoard: Board;
  updateName: (name: string) => void;
  addColumn: () => void;
  updateColumn: (name: string, colIdx: number) => void;
  removeColumn: (colIdx: number) => void;
  resetBoard: () => void;
}

const genInitBoard = () => ({
  _id: genKey(),
  name: "",
  columns: [
    { name: "Todo", tasks: [] },
    { name: "Doing", tasks: [] },
    { name: "Done", tasks: [] },
  ],
});

const NewBoardContext = createContext({} as NewBoardStore);

export const NewBoardProvider: FC<PropsWithChildren> = (props) => {
  const [newBoard, setNewBoard] = useState(genInitBoard());

  const updateName = (name: string) => setNewBoard({ ...newBoard, name });

  const addColumn = () =>
    setNewBoard({
      ...newBoard,
      columns: [...newBoard.columns, { name: "", tasks: [] }],
    });

  const updateColumn = (name: string, colIdx: number) => {
    if (newBoard.columns[colIdx]) {
      const columns = newBoard.columns;
      const updatedColumn = columns[colIdx];
      updatedColumn.name = name;
      columns[colIdx] = updatedColumn;
      setNewBoard({ ...newBoard, columns });
    }
  };

  const removeColumn = (colIdx: number) => {
    if (newBoard.columns[colIdx]) {
      const columns = newBoard.columns;
      columns.splice(colIdx, 1);
      setNewBoard({ ...newBoard, columns });
    }
  };

  const resetBoard = () => setNewBoard(genInitBoard());

  return (
    <NewBoardContext.Provider
      value={{
        newBoard,
        updateName,
        addColumn,
        updateColumn,
        removeColumn,
        resetBoard,
      }}
      {...props}
    />
  );
};

export const useNewBoardStore = () => useContext(NewBoardContext);
