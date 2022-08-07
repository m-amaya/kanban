import { FC } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  FormGroup,
  FormSection,
  InputItem,
  Label,
  TextArea,
  TextInput,
} from "~/components/form";
import { styled } from "~/styles";
import { ICONS } from "~/tokens";

import Dialog, { ModalTitle } from "./Dialog";

const PlusIcon = styled(ICONS.addTask);

const EditTaskModal: FC = () => {
  return (
    <Dialog onSubmit={(e) => e.preventDefault()}>
      <ModalTitle>Edit Task</ModalTitle>
      <FormSection>
        <Label>Title</Label>
        <TextInput value='Add authentication endpoints' />
      </FormSection>
      <FormSection>
        <Label>Description</Label>
        <TextArea />
      </FormSection>
      <FormSection>
        <Label>Subtasks</Label>
        <FormGroup>
          <InputItem value='Define user model' />
          <InputItem value='Add auth endpoints' />
          <Button
            kind='secondary'
            css={{ display: "flex", justifyContent: "center" }}
          >
            <PlusIcon /> Add New Subtask
          </Button>
        </FormGroup>
      </FormSection>
      <FormSection>
        <Label>Status</Label>
        <Dropdown label='Doing'>
          <DropdownItem>Todo</DropdownItem>
          <DropdownItem>Doing</DropdownItem>
          <DropdownItem>Done</DropdownItem>
        </Dropdown>
      </FormSection>
      <Button kind='primary' type='submit'>
        Create Task
      </Button>
    </Dialog>
  );
};

export default EditTaskModal;
