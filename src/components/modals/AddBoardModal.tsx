import { FC, useState } from "react";

import {
  Button,
  FormGroup,
  FormSection,
  InputItem,
  Label,
  TextInput,
} from "~/components/form";
import { useBoardStore, useModalStore, useNewBoardStore } from "~/store";
import { styled } from "~/styles";
import { ICONS } from "~/tokens";
import Dialog, { ModalTitle } from "./Dialog";

const PlusIcon = styled(ICONS.addTask);

const AddBoardModal: FC = () => {
  const { addBoard } = useBoardStore();
  const { closeModal } = useModalStore();
  const {
    addColumn,
    newBoard,
    removeColumn,
    resetBoard,
    updateColumn,
    updateName,
  } = useNewBoardStore();
  const [errorMsg, setErrorMsg] = useState("");

  const reset = () => {
    resetBoard();
    closeModal();
  };

  return (
    <Dialog
      onSubmit={(e) => {
        e.preventDefault();
        if (newBoard.name) {
          addBoard(newBoard);
          reset();
        } else {
          setErrorMsg("Required");
        }
      }}
      onReset={() => reset()}
    >
      <ModalTitle>Add New Board</ModalTitle>
      <FormSection>
        <Label>Board Name</Label>
        <TextInput
          value={newBoard.name}
          placeholder='e.g. Web Design'
          aria-errormessage={errorMsg}
          onChange={({ currentTarget: { value } }) => {
            updateName(value);
            if (value && errorMsg) {
              setErrorMsg("");
            }
          }}
        />
      </FormSection>
      <FormSection>
        <Label>Board Columns</Label>
        <FormGroup>
          {newBoard.columns.map((column, idx) => (
            <InputItem
              key={idx}
              value={column.name}
              onChange={(e) => updateColumn(e.currentTarget.value, idx)}
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
          Create New Board
        </Button>
        <Button type='reset' kind='secondary'>
          Cancel
        </Button>
      </FormSection>
    </Dialog>
  );
};

export default AddBoardModal;
