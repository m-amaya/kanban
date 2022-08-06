import { FC } from "react";

import mobileLogoUrl from "~/assets/logo-mobile.svg";
import { Button } from "~/components/form";
import { styled } from "~/styles";
import { ICONS } from "~/tokens";
import { useMediaQuery } from "~/utils";

const Section = styled("section", {
  alignItems: "center",
  display: "flex",
  flex: 1,
  justifyContent: "space-between",
  paddingLeft: 16,
  paddingRight: 16,
  "@tablet": {
    paddingLeft: 24,
    paddingRight: 24,
  },
});

const Logo = styled("div", {
  display: "grid",
  gap: 16,
  gridAutoFlow: "column",
});

const Title = styled("div", {
  textStyle: "headLg",
  "@tablet": {
    fontSize: 20,
  },
  "@desktop": {
    textStyle: "headXl",
  },
});

const BoardButton = styled("button", {
  textStyle: "headLg",
  alignItems: "center",
  backgroundColor: "transparent",
  border: "none",
  color: "$black",
  cursor: "pointer",
  display: "inline-grid",
  gap: 8,
  gridAutoFlow: "column",
  outline: 0,
});

const ChevronIcon = styled(ICONS.chevronDown, {
  color: "$mainPurple",
});

const Actions = styled("div", {
  display: "flex",
});

const PlusIcon = styled(ICONS.addTask, {
  color: "$white",
  height: 12,
  width: 12,
});

const MoreButton = styled("button", {
  alignItems: "center",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  display: "inline-grid",
  height: 32,
  outline: 0,
  paddingLeft: 16,
  "@tablet": {
    height: 48,
  },
});

const MoreIcon = styled(ICONS.verticalEllipsis, {
  color: "$mediumGrey",
});

const HeaderContent: FC = () => {
  const { isMobile, isGteTablet } = useMediaQuery();

  return (
    <Section>
      <Logo>
        {isMobile ? (
          <>
            <img src={mobileLogoUrl} />
            <BoardButton>
              Platform Launch <ChevronIcon />
            </BoardButton>
          </>
        ) : (
          <Title>Platform Launch</Title>
        )}
      </Logo>
      <Actions>
        <Button kind='primary' isIcon={isMobile}>
          <PlusIcon />
          {isGteTablet && "Add New Task"}
        </Button>
        <MoreButton>
          <MoreIcon />
        </MoreButton>
      </Actions>
    </Section>
  );
};

export default HeaderContent;
