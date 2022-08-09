import { FC, useMemo } from "react";

import {
  Checkbox,
  Dropdown,
  DropdownItem,
  FormGroup,
  FormSection,
  Label,
  MoreOptions,
  MoreItem,
  Button,
} from "~/components/form";
import { useBoardStore, useModalStore, useTaskStore } from "~/store";
import { styled } from "~/styles";
import Dialog, { ModalTitle, ModalDescription } from "./Dialog";

const Header = styled("div", {
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
});

const ViewTaskModal: FC = () => {
  const { board } = useBoardStore();
  const { closeModal, toggleModal } = useModalStore();
  const { task, resetTask, updateStatus, updateSubtask } = useTaskStore();

  if (!board || !task) {
    return null;
  }

  const numSubtasks = task.subtasks.length;
  const numSubtasksCompleted = useMemo(
    () => task.subtasks.filter((subtask) => subtask.isCompleted).length,
    [task.subtasks],
  );

  return (
    <Dialog
      onSubmit={(e) => e.preventDefault()}
      onReset={() => {
        console.log("reset task");
        resetTask();
        closeModal();
      }}
    >
      <Header>
        <ModalTitle>{task.title}</ModalTitle>
        <MoreOptions>
          <MoreItem onClick={() => toggleModal("editTask")}>Edit Task</MoreItem>
          <MoreItem isDangerous onClick={() => toggleModal("deleteTask")}>
            Delete Task
          </MoreItem>
        </MoreOptions>
      </Header>
      {task.description && (
        <ModalDescription>{task.description}</ModalDescription>
      )}
      <FormSection>
        <Label>
          Subtasks ({numSubtasksCompleted} of {numSubtasks})
        </Label>
        <FormGroup>
          {task.subtasks.map(({ title, isCompleted }, idx) => (
            <Checkbox
              key={`checkbox-${idx}`}
              isChecked={isCompleted}
              onClick={() => updateSubtask({ isCompleted: !isCompleted }, idx)}
            >
              {title}
            </Checkbox>
          ))}
        </FormGroup>
      </FormSection>
      <FormSection>
        <Label>Current Status</Label>
        <Dropdown label={task.status}>
          {board.columns.map(({ name }, idx) => (
            <DropdownItem
              key={`status-${idx}`}
              onClick={() => updateStatus(name)}
            >
              {name}
            </DropdownItem>
          ))}
        </Dropdown>
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

export default ViewTaskModal;
