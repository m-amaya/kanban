import { FC, PropsWithChildren, useRef, useState } from "react";

import { styled } from "~/styles";
import { ICONS } from "~/tokens";
import { useClickOutside } from "~/utils";

const Wrapper = styled("div", {
  position: "relative",
});

const Button = styled("button", {
  alignItems: "center",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  display: "inline-grid",
  height: 32,
  outline: 0,
  padding: 8,
});

const MoreIcon = styled(ICONS.verticalEllipsis, {
  color: "$mediumGrey",
});

const Menu = styled("ul", {
  backgroundColor: "$bg",
  border: "1px solid $lines",
  borderRadius: 8,
  boxShadow: "0px 10px 20px rgba(54, 78, 126, 0.25)",
  listStyleType: "none",
  top: "calc(100% + 16px)",
  paddingTop: 8,
  paddingBottom: 8,
  position: "absolute",
  right: 0,
  minWidth: 200,
});

const MoreOptions: FC<PropsWithChildren> = ({ children }) => {
  const menuRef = useRef(null);
  const [isOpen, setOpen] = useState(false);

  useClickOutside(menuRef, {
    onClick: () => setOpen(false),
  });

  return (
    <Wrapper>
      <Button onClick={() => setOpen(!isOpen)}>
        <MoreIcon />
      </Button>
      {isOpen && <Menu ref={menuRef}>{children}</Menu>}
    </Wrapper>
  );
};

export default MoreOptions;
