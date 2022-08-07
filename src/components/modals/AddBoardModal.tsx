import { FC } from "react";

import {
  Button,
  FormGroup,
  FormSection,
  InputItem,
  Label,
  TextInput,
} from "~/components/form";
import { styled } from "~/styles";
import { ICONS } from "~/tokens";
import Dialog, { ModalTitle } from "./Dialog";

const PlusIcon = styled(ICONS.addTask);

const AddBoardModal: FC = () => {
  return (
    <Dialog onSubmit={(e) => e.preventDefault()}>
      <ModalTitle>Add New Board</ModalTitle>
      <FormSection>
        <Label>Board Name</Label>
        <TextInput placeholder='e.g. Web Design' aria-errormessage='' />
      </FormSection>
      <FormSection>
        <Label>Board Columns</Label>
        <FormGroup>
          <InputItem />
          <InputItem />
          <InputItem />
          <Button
            kind='secondary'
            css={{ display: "flex", justifyContent: "center" }}
          >
            <PlusIcon /> Add New Column
          </Button>
        </FormGroup>
      </FormSection>
      <Button kind='primary'>Create New Board</Button>
    </Dialog>
  );
};

export default AddBoardModal;
