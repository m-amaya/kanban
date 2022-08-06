import { FC, useEffect } from "react";

import Content from "~/components/Content";
import { Header } from "~/components/header";
import { globalStyles } from "~/styles";

const App: FC = () => {
  useEffect(() => {
    globalStyles();
  }, []);

  return (
    <div>
      <Header />
      <Content />
    </div>
  );
};

export default App;
