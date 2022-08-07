import { FC } from "react";
import { Button, FormGroup } from "~/components/form";

import Dialog, { ModalDescription, ModalTitle } from "./Dialog";

const DeleteTaskModal: FC = () => {
  return (
    <Dialog onSubmit={(e) => e.preventDefault()}>
      <ModalTitle isDangerous>Delete this task?</ModalTitle>
      <ModalDescription>
        Are you sure you wanted to delete the &quot;<b>Build settings ui</b>
        &quot; task and its subtasks? This action cannot be reversed.
      </ModalDescription>
      <FormGroup>
        <Button type='submit' kind='danger'>
          Delete
        </Button>
        <Button kind='secondary'>Cancel</Button>
      </FormGroup>
    </Dialog>
  );
};

export default DeleteTaskModal;
