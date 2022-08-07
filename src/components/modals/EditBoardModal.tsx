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

const EditBoardModal: FC = () => {
  return (
    <Dialog onSubmit={(e) => e.preventDefault()}>
      <ModalTitle>Edit Board</ModalTitle>
      <FormSection>
        <Label>Board Name</Label>
        <TextInput value='Platform Launch' />
      </FormSection>
      <FormSection>
        <Label>Board Columns</Label>
        <FormGroup>
          <InputItem value='Todo' />
          <InputItem value='Doing' />
          <InputItem value='Done' />
          <Button
            kind='secondary'
            css={{ display: "flex", justifyContent: "center" }}
          >
            <PlusIcon /> Add New Column
          </Button>
        </FormGroup>
      </FormSection>
      <Button type='submit' kind='primary'>
        Save Changes
      </Button>
    </Dialog>
  );
};

export default EditBoardModal;
