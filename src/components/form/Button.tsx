import { styled } from "~/styles";

const Button = styled("button", {
  alignItems: "center",
  backgroundColor: "transparent",
  border: 0,
  borderRadius: 24,
  cursor: "pointer",
  display: "inline-grid",
  gridAutoFlow: "column",
  outline: 0,
  textStyle: "headMd",
  "@tablet": {
    gap: 6,
    height: 48,
    paddingLeft: 24,
    paddingRight: 24,
  },

  variants: {
    kind: {
      primary: {
        backgroundColor: "$mainPurple",
        color: "$white",
      },
      secondary: {},
      danger: {},
    },
    isIcon: {
      true: {
        height: 32,
        paddingLeft: 18,
        paddingRight: 18,
      },
    },
  },
});

export default Button;
