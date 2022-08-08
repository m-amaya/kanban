import { FC, useState } from "react";
import {
  Button,
  FormGroup,
  FormSection,
  InputItem,
  Label,
  TextInput,
} from "~/components/form";
import { useBoardStore, useModalStore } from "~/store";
import { styled } from "~/styles";
import { ICONS } from "~/tokens";

import Dialog, { ModalTitle } from "./Dialog";

const PlusIcon = styled(ICONS.addTask);

const EditBoardModal: FC = () => {
  const {
    addColumn,
    board,
    removeColumn,
    saveBoard,
    selectBoard,
    updateColumn,
    updateName,
  } = useBoardStore();
  const { closeModal } = useModalStore();
  const [errMsg, setErrMsg] = useState("");

  if (!board) {
    return null;
  }

  return (
    <Dialog
      onSubmit={(e) => {
        e.preventDefault();
        if (board.name) {
          saveBoard();
          closeModal();
        } else {
          setErrMsg("Required");
        }
      }}
      onReset={() => {
        selectBoard(board._id);
        closeModal();
      }}
    >
      <ModalTitle>Edit Board</ModalTitle>
      <FormSection>
        <Label>Board Name</Label>
        <TextInput
          value={board.name}
          onChange={({ currentTarget: { value } }) => {
            updateName(value);

            if (value && errMsg) {
              setErrMsg("");
            }
          }}
        />
      </FormSection>
      <FormSection>
        <Label>Board Columns</Label>
        <FormGroup>
          {board.columns.map((column, idx) => (
            <InputItem
              key={idx}
              value={column.name}
              onChange={({ currentTarget: { value } }) =>
                updateColumn(value, idx)
              }
              onClose={() => removeColumn(idx)}
            />
          ))}
          <Button
            type='button'
            kind='secondary'
            css={{ display: "flex", justifyContent: "center" }}
            onClick={() => addColumn()}
          >
            <PlusIcon /> Add New Column
          </Button>
        </FormGroup>
      </FormSection>
      <FormSection>
        <Button type='submit' kind='primary'>
          Save Changes
        </Button>
        <Button type='reset' kind='secondary'>
          Cancel
        </Button>
      </FormSection>
    </Dialog>
  );
};

export default EditBoardModal;
