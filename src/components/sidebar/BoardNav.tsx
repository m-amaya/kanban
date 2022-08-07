import { FC } from "react";
import { useBoardStore, useModalStore } from "~/store";

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
  const { board: currentBoard, boardList, selectBoard } = useBoardStore();
  const { toggleModal } = useModalStore();

  return (
    <Nav>
      <Title>All Boards (3)</Title>
      <div>
        {boardList.map((board) => (
          <BoardTab
            key={board._id}
            isActive={board._id === currentBoard?._id}
            onClick={() => selectBoard(board._id)}
          >
            {board.name}
          </BoardTab>
        ))}
        <BoardTab isCreateNew onClick={() => toggleModal("addBoard")} />
      </div>
    </Nav>
  );
};

export default BoardNav;
