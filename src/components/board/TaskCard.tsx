import { FC, PropsWithChildren } from "react";

import { styled } from "~/styles";

const Card = styled("div", {
  backgroundColor: "$bg",
  border: "1px solid $lines",
  borderRadius: 8,
  boxShadow: "0px 4px 6px rgba(54, 78, 126, 0.101545)",
  padding: "24px 16px",
});

const TaskCard: FC<PropsWithChildren> = ({ children }) => {
  return <Card>{children}</Card>;
};

export default TaskCard;
