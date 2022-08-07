import { FC } from "react";
import { Button, FormGroup } from "~/components/form";

import Dialog, { ModalDescription, ModalTitle } from "./Dialog";

const DeleteBoardModal: FC = () => {
  return (
    <Dialog onClick={(e) => e.preventDefault()}>
      <ModalTitle isDangerous>Delete this board?</ModalTitle>
      <ModalDescription>
        Are you sure you want to delete the &quot;<b>Platform Launch</b>&quot;
        board? This actions will remove all columns and tasks and cannot be
        reversed.
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

export default DeleteBoardModal;
