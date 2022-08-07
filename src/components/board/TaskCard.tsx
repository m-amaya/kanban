import { FC } from "react";
import { Draggable } from "react-beautiful-dnd";

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
  const numSubtasks = data.subtasks.length;
  const numSubtasksCompleted = data.subtasks.filter(
    (subtasks) => subtasks.isCompleted,
  ).length;
  const id = useUniqueId("task");

  return (
    <Draggable draggableId={id} index={index}>
      {({ innerRef, draggableProps, dragHandleProps }) => (
        <Card
          ref={innerRef}
          {...draggableProps}
          {...dragHandleProps}
          onClick={() => console.log("clicked")}
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
