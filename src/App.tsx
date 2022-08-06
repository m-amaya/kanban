import { FC, useEffect } from "react";

import Content from "~/components/Content";
import { Header } from "~/components/header";
import { Modal } from "~/components/modals";
import { ModalProvider, SidebarProvider, ThemeProvider } from "~/store";
import { globalStyles } from "~/styles";

const App: FC = () => {
  useEffect(() => {
    globalStyles();
  }, []);

  return (
    <ModalProvider>
      <SidebarProvider>
        <ThemeProvider>
          <Header />
          <Content />
          <Modal />
        </ThemeProvider>
      </SidebarProvider>
    </ModalProvider>
  );
};

export default App;
