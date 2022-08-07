import { FC } from "react";

import {
  Checkbox,
  Dropdown,
  DropdownItem,
  FormGroup,
  FormSection,
  Label,
  MoreOptions,
  MoreItem,
} from "~/components/form";
import { useModalStore } from "~/store";
import { styled } from "~/styles";
import Dialog, { ModalTitle, ModalDescription } from "./Dialog";

const Header = styled("div", {
  alignItems: "center",
  display: "flex",
});

const ViewTaskModal: FC = () => {
  const { toggleModal } = useModalStore();

  return (
    <Dialog onSubmit={(e) => e.preventDefault()}>
      <Header>
        <ModalTitle>
          Research pricing points of various competitors and trial different
          business models
        </ModalTitle>
        <MoreOptions>
          <MoreItem onClick={() => toggleModal("editTask")}>Edit Task</MoreItem>
          <MoreItem isDangerous onClick={() => toggleModal("deleteTask")}>
            Delete Task
          </MoreItem>
        </MoreOptions>
      </Header>
      <ModalDescription>
        We know what we&apos;re planning to build for version one. Now we need
        to finalize the first pricing model we&apos;ll use. Keep iterating the
        subtasks until we have a coherent proposition.
      </ModalDescription>
      <FormSection>
        <Label>Subtasks (2 of 3)</Label>
        <FormGroup>
          <Checkbox isChecked>
            Research competitor pricing and business models
          </Checkbox>
          <Checkbox isChecked>
            Outline a business model that works for our solution
          </Checkbox>
          <Checkbox>Surveying and testing</Checkbox>
        </FormGroup>
      </FormSection>
      <FormSection>
        <Label>Current Status</Label>
        <Dropdown label='Doing'>
          <DropdownItem>Todo</DropdownItem>
          <DropdownItem>Doing</DropdownItem>
          <DropdownItem>Done</DropdownItem>
        </Dropdown>
      </FormSection>
    </Dialog>
  );
};

export default ViewTaskModal;
