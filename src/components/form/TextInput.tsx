import {
  ComponentProps,
  FC,
  HTMLAttributes,
  InputHTMLAttributes,
  useState,
} from "react";
import { darkTheme, styled } from "~/styles";
import { rgba } from "~/utils";

const InputWrapper = styled("div", {
  border: "1px solid rgba(130, 143, 163, 0.25)",
  borderRadius: 4,
  height: 40,
  position: "relative",
  width: "100%",
  smoothTransition: ["border"],
  "&:hover": {
    borderColor: "rgba(130, 143, 163, 0.5)",
  },
  variants: {
    isFocused: {
      true: {
        borderColor: "rgba(130, 143, 163, 0.6)",
      },
    },
    isError: {
      true: {
        borderColor: "$red",
      },
    },
  },
});

const Input = styled("input", {
  textStyle: "bodyLg",
  backgroundColor: "transparent",
  border: "none",
  borderRadius: "inherit",
  height: "100%",
  outline: 0,
  paddingLeft: 16,
  paddingRight: 16,
  width: "100%",
  "&::placeholder": {
    color: rgba("black", 0.25),
  },
  [`.${darkTheme} &::placeholder`]: {
    color: rgba("white", 0.25),
  },
});

const ErrorMsg = styled("div", {
  textStyle: "bodyLg",
  color: "$red",
  position: "absolute",
  right: 16,
  top: "50%",
  transform: "translateY(-50%)",
});

const TextInput: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  const [isFocused, setFocus] = useState(false);
  const errorMessage = props["aria-errormessage"];

  return (
    <InputWrapper isFocused={isFocused} isError={!!errorMessage}>
      <Input
        {...props}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {errorMessage && <ErrorMsg>{errorMessage}</ErrorMsg>}
    </InputWrapper>
  );
};

export default TextInput;
