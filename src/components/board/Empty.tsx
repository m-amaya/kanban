import { FC } from "react";

import { Button } from "~/components/form";
import { useModalStore } from "~/store";
import { styled } from "~/styles";
import { ICONS } from "~/tokens";

const Container = styled("div", {
  alignItems: "center",
  flex: 1,
  display: "flex",
  justifyContent: "center",
});

const Content = styled("div", {
  textStyle: "headLg",
  color: "$mediumGrey",
  display: "inline-grid",
  gap: 28,
  textAlign: "center",
});

const PlusIcon = styled(ICONS.addTask);

const Empty: FC = () => {
  const { toggleModal } = useModalStore();

  return (
    <Container>
      <Content>
        <div>This board is empty. Create a new column to get started.</div>
        <div>
          <Button kind='primary' onClick={() => toggleModal("editBoard")}>
            <PlusIcon /> Add New Column
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default Empty;
