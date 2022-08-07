import {
  FC,
  HTMLAttributes,
  MouseEventHandler,
  PropsWithChildren,
} from "react";

import { styled } from "~/styles";
import { ICONS } from "~/tokens";
import { rgba } from "~/utils";

const Tab = styled("button", {
  alignItems: "center",
  backgroundColor: "transparent",
  border: "none",
  borderTopRightRadius: 100,
  borderBottomRightRadius: 100,
  color: "$mediumGrey",
  cursor: "pointer",
  display: "grid",
  gap: 12,
  gridAutoFlow: "column",
  height: 48,
  justifyContent: "left",
  outline: 0,
  paddingLeft: 24,
  width: "100%",
  smoothTransition: ["background-color", "color"],
  "&:hover": {
    backgroundColor: rgba("mainPurple", 0.1),
    color: "$mainPurple",
  },
  variants: {
    isActive: {
      true: {
        backgroundColor: "$mainPurple",
        color: "$white",
        "&:hover": {
          backgroundColor: "$mainPurple",
          color: "$white",
        },
      },
    },
    isCreateNew: {
      true: {
        color: "$mainPurple",
      },
    },
  },
});

const BoardIcon = styled(ICONS.board, { height: 16, width: 16 });

const PlusIcon = styled(ICONS.addTask, {});

const Label = styled("span", {
  textStyle: "headMd",
  alignItems: "center",
  color: "inherit",
  display: "inline-grid",
  gap: 6,
  gridAutoFlow: "column",
});

interface Props extends HTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  isCreateNew?: boolean;
}

const BoardTab: FC<Props> = ({ isActive, isCreateNew, children, ...attrs }) => {
  return (
    <Tab {...attrs} isActive={isActive} isCreateNew={isCreateNew}>
      <BoardIcon />
      <Label>
        {isCreateNew ? (
          <>
            <PlusIcon /> Create New Board
          </>
        ) : (
          children
        )}
      </Label>
    </Tab>
  );
};

export default BoardTab;
