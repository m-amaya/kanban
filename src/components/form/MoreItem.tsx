import { styled } from "~/styles";

const MoreItem = styled("li", {
  textStyle: "bodyLg",
  backgroundColor: "transparent",
  color: "$mediumGrey",
  cursor: "pointer",
  padding: "8px 16px",
  userSelect: "none",
  smoothTransition: ["background-color"],
  "&:hover": {
    backgroundColor: "$pageBg",
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
