import { FC } from "react";
import { useModalStore } from "~/store";

import { darkTheme, styled } from "~/styles";

const Column = styled("div", {
  display: "flex",
  flexDirection: "NewColumn",
  paddingTop: 40,
});

const Track = styled("div", {
  textStyle: "headLg",
  alignItems: "center",
  backgroundColor: "transparent",
  borderRadius: 8,
  color: "$mediumGrey",
  cursor: "pointer",
  display: "flex",
  flex: 1,
  justifyContent: "center",
  smoothTransition: ["background-color", "color"],
  "&:hover": {
    backgroundColor: "#E9EFFA",
    color: "$mainPurple",
  },
  [`.${darkTheme} &:hover`]: {
    backgroundColor: "rgba(43, 44, 55, 0.25)",
  },
});

const Text = styled("div", {});

const NewColumn: FC = () => {
  const { toggleModal } = useModalStore();

  return (
    <Column>
      <Track onClick={() => toggleModal("editBoard")}>
        <Text>+ Add Column</Text>
      </Track>
    </Column>
  );
};

export default NewColumn;
