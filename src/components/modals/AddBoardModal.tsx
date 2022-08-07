import { FC, useState } from "react";

import {
  Button,
  FormGroup,
  FormSection,
  InputItem,
  Label,
  TextInput,
} from "~/components/form";
import { useBoardStore, useNewBoardStore } from "~/store";
import { styled } from "~/styles";
import { ICONS } from "~/tokens";
import Dialog, { ModalTitle } from "./Dialog";

const PlusIcon = styled(ICONS.addTask);

const AddBoardModal: FC = () => {
  const { addBoard } = useBoardStore();
  const {
    addColumn,
    newBoard,
    removeColumn,
    resetBoard,
    updateColumn,
    updateName,
  } = useNewBoardStore();
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <Dialog
      onSubmit={(e) => {
        e.preventDefault();
        if (newBoard.name) {
          addBoard(newBoard);
          resetBoard();
        } else {
          setErrorMsg("Required");
        }
      }}
    >
      <ModalTitle>Add New Board</ModalTitle>
      <FormSection>
        <Label>Board Name</Label>
        <TextInput
          value={newBoard.name}
          placeholder='e.g. Web Design'
          aria-errormessage={errorMsg}
          onChange={(e) => {
            updateName(e.currentTarget.value);
            if (e.currentTarget.value) {
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
            kind='secondary'
            css={{ display: "flex", justifyContent: "center" }}
            onClick={() => addColumn()}
          >
            <PlusIcon /> Add New Column
          </Button>
        </FormGroup>
      </FormSection>
      <Button type='submit' kind='primary'>
        Create New Board
      </Button>
    </Dialog>
  );
};

export default AddBoardModal;
