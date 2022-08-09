import { FC, useMemo } from "react";
import { Draggable } from "react-beautiful-dnd";

import { useModalStore, useTaskStore } from "~/store";
import { styled } from "~/styles";
import { useUniqueId } from "~/utils";

const Card = styled("div", {
  backgroundColor: "$bg",
  border: "1px solid $lines",
  borderRadius: 8,
  boxShadow: "0px 4px 6px rgba(54, 78, 126, 0.101545)",
  cursor: "grab",
  display: "grid",
  gap: 8,
  marginBottom: 20,
  padding: 24,
  userSelect: "none",
});

const Title = styled("div", {
  textStyle: "headMd",
});

const Description = styled("div", {
  textStyle: "bodyMd",
  color: "$mediumGrey",
});

const TaskCard: FC<{ data: Task; index: number }> = ({ data, index }) => {
  const { toggleModal } = useModalStore();
  const { viewTask } = useTaskStore();
  const numSubtasks = data.subtasks.length;
  const numSubtasksCompleted = useMemo(
    () => data.subtasks.filter((subtasks) => subtasks.isCompleted).length,
    [data.subtasks],
  );
  const id = useUniqueId("task");

  return (
    <Draggable draggableId={id} index={index}>
      {({ innerRef, draggableProps, dragHandleProps }) => (
        <Card
          ref={innerRef}
          {...draggableProps}
          {...dragHandleProps}
          onClick={() => {
            viewTask(data);
            toggleModal("viewTask");
          }}
        >
          <Title>{data.title}</Title>
          <Description>
            {numSubtasksCompleted} of {numSubtasks} subtasks
          </Description>
        </Card>
      )}
    </Draggable>
  );
};

export default TaskCard;
