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
  smoothTransition: ["background-color", "color"],
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
        "&:hover": {
          backgroundColor: "$mainPurpleHover",
        },
      },
      secondary: {
        backgroundColor: "rgba(99, 95, 199, 0.1)",
        color: "$mainPurple",
        "&:hover": {
          backgroundColor: "rgba(99, 95, 199, 0.25)",
        },
      },
      danger: {
        backgroundColor: "$red",
        color: "$white",
        "&:hover": {
          backgroundColor: "$redHover",
        },
      },
    },
    isSmall: {
      true: {
        borderRadius: 20,
        height: 40,
      },
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
