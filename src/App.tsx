import { FC, useEffect } from "react";

import ApplyTheme from "~/components/ApplyTheme";
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
          <ApplyTheme>
            <Header />
            <Content />
            <Modal />
          </ApplyTheme>
        </ThemeProvider>
      </SidebarProvider>
    </ModalProvider>
  );
};

export default App;
