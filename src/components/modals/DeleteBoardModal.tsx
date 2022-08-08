import { FC } from "react";
import { Button, FormGroup } from "~/components/form";
import { useBoardStore, useModalStore } from "~/store";

import Dialog, { ModalDescription, ModalTitle } from "./Dialog";

const DeleteBoardModal: FC = () => {
  const { board, deleteBoard } = useBoardStore();
  const { closeModal } = useModalStore();

  if (!board) {
    return null;
  }

  return (
    <Dialog
      onSubmit={(e) => {
        e.preventDefault();
        deleteBoard(board);
      }}
      onReset={() => closeModal()}
    >
      <ModalTitle isDangerous>Delete this board?</ModalTitle>
      <ModalDescription>
        Are you sure you want to delete the &quot;<b>{board.name}</b>&quot;
        board? This actions will remove all columns and tasks and cannot be
        reversed.
      </ModalDescription>
      <FormGroup>
        <Button type='submit' kind='danger'>
          Delete
        </Button>
        <Button type='reset' kind='secondary'>
          Cancel
        </Button>
      </FormGroup>
    </Dialog>
  );
};

export default DeleteBoardModal;
