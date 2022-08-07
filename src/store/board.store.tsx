import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

import setupDb, { Board, db } from "~/utils/setupDb";

type BoardList = Pick<Board, "_id" | "name">[];

interface BoardStore {
  board?: Board;
  boardList: BoardList;
  selectBoard: (_id: string) => void;
}

const BoardContext = createContext({} as BoardStore);

export const BoardProvider: FC<PropsWithChildren> = (props) => {
  const [board, setBoard] = useState<Board>();
  const [boardList, setList] = useState<BoardList>([]);

  useEffect(() => {
    setupDb().then((boards: BoardList) => {
      setList(boards);

      if (boards.length) {
        selectBoard(boards[0]._id);
      }
    });
  }, []);

  const selectBoard = (_id: string) => {
    db.get(_id)
      .then((board) => setBoard(board))
      .catch((error) => console.error(error));
  };

  return (
    <BoardContext.Provider
      value={{ board, boardList, selectBoard }}
      {...props}
    />
  );
};

export const useBoardStore = () => useContext(BoardContext);
