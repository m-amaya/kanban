import { darkTheme, styled } from "~/styles";
import { rgba } from "~/utils";

const TextArea = styled("textarea", {
  textStyle: "bodyLg",
  backgroundColor: "transparent",
  border: "1px solid rgba(130, 143, 163, 0.25)",
  borderRadius: 4,
  minHeight: 112,
  outline: 0,
  padding: "8px 16px",
  resize: "none",
  smoothTransition: ["border"],
  "&:focus": {
    borderColor: "rgba(130, 143, 163, 0.6)",
  },
  "&:hover": {
    borderColor: "rgba(130, 143, 163, 0.5)",
  },
  "&::placeholder": {
    color: rgba("black", 0.25),
  },
  [`.${darkTheme} &::placeholder`]: {
    color: rgba("white", 0.25),
  },
});

export default TextArea;
