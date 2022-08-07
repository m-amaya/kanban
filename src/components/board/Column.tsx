import { FC } from "react";
import { Droppable } from "react-beautiful-dnd";

import { styled } from "~/styles";
import TaskCard from "./TaskCard";

const Track = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const Title = styled("div", {
  alignItems: "center",
  color: "$mediumGrey",
  display: "inline-grid",
  gap: 12,
  gridAutoFlow: "column",
  fontSize: 12,
  fontWeight: "$bold",
  justifyContent: "left",
  letterSpacing: 2.4,
  lineHeight: "15px",
  marginBottom: 24,
  textTransform: "uppercase",
});

const StatusDot = styled("div", {
  backgroundColor: "aqua",
  borderRadius: "50%",
  height: 15,
  width: 15,
});

const TaskContainer = styled("div", {
  flex: 1,
  overflowY: "auto",
});

const TaskGrid = styled("div", {
  display: "grid",
  gap: 20,
});

const Column: FC<{ data: Column }> = ({ data }) => {
  return (
    <Track>
      <Title>
        <StatusDot /> {data.name} ({data.tasks.length})
      </Title>
      <TaskContainer>
        <TaskGrid>
          {data.tasks.map((task, idx) => (
            <TaskCard key={idx} data={task} />
          ))}
        </TaskGrid>
      </TaskContainer>
    </Track>
  );
};

export default Column;
