import { FC } from "react";

import { styled } from "~/styles";

const Card = styled("div", {
  backgroundColor: "$bg",
  border: "1px solid $lines",
  borderRadius: 8,
  boxShadow: "0px 4px 6px rgba(54, 78, 126, 0.101545)",
  display: "grid",
  gap: 8,
  padding: 24,
});

const Title = styled("div", {
  textStyle: "headMd",
});

const Description = styled("div", {
  textStyle: "bodyMd",
  color: "$mediumGrey",
});

const TaskCard: FC<{ data: Task }> = ({ data }) => {
  const numSubtasks = data.subtasks.length;
  const numSubtasksCompleted = data.subtasks.filter(
    (subtasks) => subtasks.isCompleted,
  ).length;

  return (
    <Card>
      <Title>{data.title}</Title>
      <Description>
        {numSubtasksCompleted} of {numSubtasks} subtasks
      </Description>
    </Card>
  );
};

export default TaskCard;
