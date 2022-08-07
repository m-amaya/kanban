import { FC, PropsWithChildren, useRef, useState } from "react";
import { darkTheme, styled } from "~/styles";
import { ICONS } from "~/tokens";
import { useClickOutside } from "~/utils";

interface Props extends PropsWithChildren {
  label?: string;
}

const Container = styled("div", {
  position: "relative",
  width: "100%",
});

const Select = styled("button", {
  textStyle: "bodyLg",
  alignItems: "center",
  backgroundColor: "transparent",
  border: "1px solid rgba(130, 143, 163, 0.25)",
  borderRadius: 4,
  cursor: "pointer",
  display: "flex",
  height: 40,
  justifyContent: "space-between",
  outline: 0,
  paddingLeft: 16,
  paddingRight: 16,
  width: "100%",
  smoothTransition: ["border"],
  "&:hover": {
    borderColor: "rgba(130, 143, 163, 0.5)",
  },
  variants: {
    isActive: {
      true: {
        borderColor: "$mainPurple",
        "&:hover": {
          borderColor: "$mainPurple",
        },
      },
    },
  },
});

const ChevronIcon = styled(ICONS.chevronDown, {
  color: "$mainPurple",
});

const Menu = styled("ul", {
  backgroundColor: "$white",
  border: "1px solid $lines",
  borderRadius: 4,
  left: 0,
  listStyleType: "none",
  paddingTop: 8,
  paddingBottom: 8,
  position: "absolute",
  top: "calc(100% + 8px)",
  width: "100%",
  [`.${darkTheme} &`]: {
    backgroundColor: "$veryDarkGrey",
  },
});

const Dropdown: FC<Props> = ({ label, children }) => {
  const menuRef = useRef(null);
  const [isOpen, setOpen] = useState(false);

  useClickOutside(menuRef, { onClick: () => setOpen(false) });

  return (
    <Container>
      <Select isActive={isOpen} onClick={() => setOpen(!isOpen)}>
        {label} <ChevronIcon />
      </Select>
      {isOpen && <Menu ref={menuRef}>{children}</Menu>}
    </Container>
  );
};

export default Dropdown;
