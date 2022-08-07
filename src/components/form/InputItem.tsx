import { FC, InputHTMLAttributes, MouseEventHandler } from "react";
import { styled } from "~/styles";
import { ICONS } from "~/tokens";

import TextInput from "./TextInput";

const Row = styled("div", {
  display: "grid",
  gap: 16,
  gridAutoFlow: "column",
  gridTemplateColumns: "auto 15px",
  width: "100%",
});

const CloseButton = styled("button", {
  backgroundColor: "transparent",
  border: "none",
  color: "$mediumGrey",
  cursor: "pointer",
  outline: 0,
  width: 15,
});

const CloseIcon = styled(ICONS.cross, {
  height: 15,
  width: 15,
});

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onClose?: MouseEventHandler<HTMLButtonElement>;
}

const InputItem: FC<Props> = ({ onClose, ...attrs }) => {
  return (
    <Row>
      <TextInput {...attrs} />
      <CloseButton onClick={onClose}>
        <CloseIcon />
      </CloseButton>
    </Row>
  );
};

export default InputItem;
