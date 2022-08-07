import { darkTheme, styled } from "~/styles";

const DropdownItem = styled("li", {
  textStyle: "bodyLg",
  backgroundColor: "transparent",
  color: "$mediumGrey",
  cursor: "pointer",
  padding: "8px 16px",
  smoothTransition: ["background-color", "color"],
  "&:hover": {
    backgroundColor: "$lightGrey",
    color: "$text",
  },
  [`.${darkTheme} &:hover`]: {
    backgroundColor: "$darkGrey",
  },
});

export default DropdownItem;
