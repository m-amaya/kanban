import { FC } from "react";

import mobileLogoUrl from "~/assets/logo-mobile.svg";
import { Button, MoreOptions, MoreItem } from "~/components/form";
import { useBoardStore, useModalStore } from "~/store";
import { styled } from "~/styles";
import { ICONS } from "~/tokens";
import { useMediaQuery } from "~/utils";

const Section = styled("section", {
  alignItems: "center",
  borderBottom: "1px solid $lines",
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
  color: "$text",
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
  alignItems: "center",
  display: "inline-grid",
  gap: 16,
  gridAutoFlow: "column",
});

const PlusIcon = styled(ICONS.addTask, {
  color: "$white",
  height: 12,
  width: 12,
});

const HeaderContent: FC = () => {
  const { isMobile, isGteTablet } = useMediaQuery();
  const { board } = useBoardStore();
  const { toggleModal } = useModalStore();

  return (
    <Section>
      <Logo>
        {isMobile ? (
          <>
            <img src={mobileLogoUrl} />
            <BoardButton onClick={() => toggleModal("boards")}>
              {board ? (
                <>
                  {board.name} <ChevronIcon />
                </>
              ) : (
                "Create New Board"
              )}
            </BoardButton>
          </>
        ) : (
          <Title>{board ? board.name : "Create New Board"}</Title>
        )}
      </Logo>
      {board && (
        <Actions>
          <Button kind='primary' isIcon={isMobile}>
            <PlusIcon />
            {isGteTablet && "Add New Task"}
          </Button>
          <MoreOptions>
            <MoreItem>Edit Board</MoreItem>
            <MoreItem isDangerous>Delete Board</MoreItem>
          </MoreOptions>
        </Actions>
      )}
    </Section>
  );
};

export default HeaderContent;
