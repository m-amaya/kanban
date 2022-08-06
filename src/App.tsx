import { FC, useEffect } from "react";

import Content from "~/components/Content";
import { Header } from "~/components/header";
import { Modal } from "~/components/modals";
import { ModalProvider } from "~/store";
import { globalStyles } from "~/styles";

const App: FC = () => {
  useEffect(() => {
    globalStyles();
  }, []);

  return (
    <ModalProvider>
      <Header />
      <Content />
      <Modal />
    </ModalProvider>
  );
};

export default App;
