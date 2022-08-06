import { FC, useState } from "react";

import { styled } from "~/styles";
import { ICONS } from "~/tokens";

const Container = styled("div", {
  alignItems: "center",
  color: "$mediumGrey",
  display: "grid",
  gap: 24,
  gridAutoFlow: "column",
});

const Toggle = styled("button", {
  backgroundColor: "$mainPurple",
  border: "none",
  borderRadius: 12,
  cursor: "pointer",
  display: "flex",
  height: 20,
  outline: 0,
  paddingLeft: 3,
  paddingTop: 3,
  width: 40,
  smoothTransition: ["padding-left"],
  variants: {
    isRight: {
      true: {
        paddingLeft: `calc(100% - ${14 + 3}px)`,
      },
    },
  },
});

const ToggleIndicator = styled("div", {
  backgroundColor: "$white",
  borderRadius: "50%",
  height: 14,
  width: 14,
});

const LightIcon = styled(ICONS.lightTheme, {});

const DarkIcon = styled(ICONS.darkTheme, {});

const ThemeToggle: FC = () => {
  const [isDark, setDark] = useState(false);

  return (
    <Container>
      <LightIcon />
      <Toggle isRight={isDark} onClick={() => setDark(!isDark)}>
        <ToggleIndicator />
      </Toggle>
      <DarkIcon />
    </Container>
  );
};

export default ThemeToggle;
