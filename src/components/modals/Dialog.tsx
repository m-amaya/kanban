import { styled } from "~/styles";

const Dialog = styled("form", {
  backgroundColor: "$bg",
  borderRadius: 8,
  display: "grid",
  gap: 24,
  maxWidth: 480,
  padding: 24,
  userSelect: "none",
  width: "calc(100vw - 32px)",
  "@tablet": {
    padding: 32,
  },
});

export const ModalTitle = styled("h1", {
  textStyle: "headLg",
  variants: {
    isDangerous: {
      true: {
        color: "$red",
      },
    },
  },
});

export const ModalDescription = styled("p", {
  textStyle: "bodyLg",
  color: "$mediumGrey",
});

export default Dialog;
