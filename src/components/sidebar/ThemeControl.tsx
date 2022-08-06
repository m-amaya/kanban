import { FC } from "react";

import { ThemeToggle } from "~/components/form";
import { styled } from "~/styles";
import { ICONS } from "~/tokens";
import { useMediaQuery } from "~/utils";

const Container = styled("div", {
  display: "grid",
  gap: 8,
  padding: 16,
  "@tablet": {
    paddingBottom: 40,
  },
  "@desktop": {
    paddingLeft: 24,
    paddingRight: 24,
  },
});

const Panel = styled("div", {
  alignItems: "center",
  backgroundColor: "$lightGrey",
  borderRadius: 6,
  display: "flex",
  height: 48,
  justifyContent: "center",
});

const HideButton = styled("button", {
  textStyle: "headMd",
  backgroundColor: "transparent",
  border: "none",
  color: "$mediumGrey",
  cursor: "pointer",
  height: 48,
  outline: 0,
});

const HideButtonContent = styled("div", {
  alignItems: "center",
  display: "inline-grid",
  gap: 10,
  gridAutoFlow: "column",
});

const HideIcon = styled(ICONS.hideSidebar, {});

const ThemeControl: FC = () => {
  const { isGteTablet } = useMediaQuery();

  return (
    <Container>
      <Panel>
        <ThemeToggle />
      </Panel>
      {isGteTablet && (
        <HideButton>
          <HideButtonContent>
            <HideIcon /> Hide Sidebar
          </HideButtonContent>
        </HideButton>
      )}
    </Container>
  );
};

export default ThemeControl;
