import { FC, PropsWithChildren } from "react";

import { useThemeStore } from "~/store";
import { darkTheme } from "~/styles";

const ApplyTheme: FC<PropsWithChildren> = ({ children }) => {
  const { isDarkTheme } = useThemeStore();

  return <div className={isDarkTheme ? darkTheme : undefined}>{children}</div>;
};

export default ApplyTheme;
