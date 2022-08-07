import { FC } from "react";
import { styled } from "~/styles";
import { ICONS } from "~/tokens";
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
} from "../form";

import Dialog, { ModalTitle } from "./Dialog";

const PlusIcon = styled(ICONS.addTask);

const AddTaskModal: FC = () => {
  return (
    <Dialog onSubmit={(e) => e.preventDefault()}>
      <ModalTitle>Add New Task</ModalTitle>
      <FormSection>
        <Label>Title</Label>
        <TextInput placeholder='e.g. Take coffee break' />
      </FormSection>
      <FormSection>
        <Label>Description</Label>
        <TextArea placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little." />
      </FormSection>
      <FormSection>
        <Label>Subtasks</Label>
        <FormGroup>
          <InputItem placeholder='e.g. Make coffee' />
          <InputItem placeholder='e.g. Drink coffee &amp; smile' />
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
        <Dropdown label='Todo'>
          <DropdownItem>Todo</DropdownItem>
          <DropdownItem>Doing</DropdownItem>
          <DropdownItem>Done</DropdownItem>
        </Dropdown>
      </FormSection>
      <Button kind='primary'>Create Task</Button>
    </Dialog>
  );
};

export default AddTaskModal;
