import { FC, MouseEventHandler, PropsWithChildren } from "react";
import { darkTheme, styled } from "~/styles";
import { ICONS } from "~/tokens";
import { rgba, useUniqueId } from "~/utils";

const Label = styled("label", {
  alignItems: "center",
  backgroundColor: "$pageBg",
  borderRadius: 4,
  cursor: "pointer",
  display: "grid",
  gap: 16,
  gridAutoFlow: "column",
  gridTemplateColumns: "16px auto",
  fontSize: 12,
  fontWeight: "$bold",
  lineHeight: "15px",
  padding: 12,
  userSelect: "none",
  smoothTransition: ["background-color", "color"],
  "&:hover": {
    backgroundColor: rgba("mainPurple", 0.25),
  },
  variants: {
    isChecked: {
      true: {
        color: rgba("black", 0.5),
        textDecorationLine: "line-through",
        [`.${darkTheme} &`]: {
          color: rgba("white", 0.5),
        },
      },
    },
  },
});

const Input = styled("input", {
  position: "absolute",
  opacity: 0,
  cursor: "pointer",
  height: 0,
  width: 0,
});

const Checkmark = styled("div", {
  alignItems: "center",
  backgroundColor: "$bg",
  border: "1px solid rgba(130, 143, 163, 0.25)",
  borderRadius: 2,
  display: "flex",
  height: 16,
  justifyContent: "center",
  width: 16,
  smoothTransition: ["background-color", "border"],
  variants: {
    isChecked: {
      true: {
        backgroundColor: "$mainPurple",
        borderColor: "$mainPurple",
      },
    },
  },
});

const CheckIcon = styled(ICONS.check, {
  color: "$white",
});

interface Props extends PropsWithChildren {
  isChecked?: boolean;
  onClick?: MouseEventHandler<HTMLLabelElement>;
}

const Checkbox: FC<Props> = ({ isChecked, onClick, children }) => {
  const id = useUniqueId();
  return (
    <Label htmlFor={id} isChecked={isChecked} onMouseDown={onClick}>
      <Input
        id={id}
        type='checkbox'
        name='checkbox'
        checked={isChecked}
        readOnly
      />
      <Checkmark isChecked={isChecked}>{isChecked && <CheckIcon />}</Checkmark>
      {children}
    </Label>
  );
};

export default Checkbox;
