import { darkTheme, styled } from "~/styles";
import { rgba } from "~/utils";

const MoreItem = styled("li", {
  textStyle: "bodyLg",
  backgroundColor: "transparent",
  color: "$mediumGrey",
  cursor: "pointer",
  padding: "8px 16px",
  userSelect: "none",
  smoothTransition: ["background-color"],
  "&:hover": {
    backgroundColor: "$lightGrey",
  },
  [`.${darkTheme} &:hover`]: {
    backgroundColor: "$veryDarkGrey",
  },
  variants: {
    isDangerous: {
      true: {
        color: "$red",
      },
    },
  },
});

export default MoreItem;
