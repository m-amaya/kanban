import { FC, useEffect, useState } from "react";
import { useBoardStore, useModalStore, useNewTaskStore } from "~/store";
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
  const { addTask, board } = useBoardStore();
  const {
    addSubtask,
    newTask,
    updateDescription,
    updateStatus,
    updateSubtask,
    updateTitle,
    removeSubtask,
    resetNewTask,
  } = useNewTaskStore();
  const { closeModal } = useModalStore();
  const [errMsg, setErrMsg] = useState("");

  if (!board) {
    return null;
  }

  useEffect(() => {
    if (!newTask.status) {
      updateStatus(board.columns[0].name);
    }
  }, [board.columns, newTask.status]);

  return (
    <Dialog
      onSubmit={(e) => {
        e.preventDefault();
        if (newTask.title) {
          addTask(newTask);
          resetNewTask();
          closeModal();
        } else {
          setErrMsg("Required");
        }
      }}
      onReset={() => {
        resetNewTask();
        closeModal();
      }}
    >
      <ModalTitle>Add New Task</ModalTitle>
      <FormSection>
        <Label>Title</Label>
        <TextInput
          value={newTask.title}
          placeholder='e.g. Take coffee break'
          aria-errormessage={errMsg}
          onChange={({ currentTarget: { value } }) => {
            updateTitle(value);

            if (errMsg && value) {
              setErrMsg("");
            }
          }}
        />
      </FormSection>
      <FormSection>
        <Label>Description</Label>
        <TextArea
          value={newTask.description}
          placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
          onChange={({ currentTarget: { value } }) => updateDescription(value)}
        />
      </FormSection>
      <FormSection>
        <Label>Subtasks</Label>
        <FormGroup>
          {newTask.subtasks.map(({ title }, idx) => (
            <InputItem
              key={idx}
              value={title}
              placeholder='e.g. Make coffee'
              onChange={({ currentTarget: { value } }) =>
                updateSubtask(value, idx)
              }
              onClose={() => removeSubtask(idx)}
            />
          ))}
          <Button
            type='button'
            kind='secondary'
            css={{ display: "flex", justifyContent: "center" }}
            onClick={() => addSubtask()}
          >
            <PlusIcon /> Add New Subtask
          </Button>
        </FormGroup>
      </FormSection>
      <FormSection>
        <Label>Status</Label>
        <Dropdown label={newTask.status}>
          {board.columns.map(({ name }, idx) => (
            <DropdownItem key={idx} onClick={() => updateStatus(name)}>
              {name}
            </DropdownItem>
          ))}
        </Dropdown>
      </FormSection>
      <FormSection>
        <Button type='submit' kind='primary'>
          Create Task
        </Button>
        <Button type='reset' kind='secondary'>
          Cancel
        </Button>
      </FormSection>
    </Dialog>
  );
};

export default AddTaskModal;
