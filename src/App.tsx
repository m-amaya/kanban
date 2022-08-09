import { FC, useEffect } from "react";

import ApplyTheme from "~/components/ApplyTheme";
import Content from "~/components/Content";
import { Header } from "~/components/header";
import { Modal } from "~/components/modals";
import {
  BoardProvider,
  ModalProvider,
  NewBoardProvider,
  NewTaskProvider,
  SidebarProvider,
  TaskProvider,
  ThemeProvider,
} from "~/store";
import { globalStyles } from "~/styles";

const App: FC = () => {
  useEffect(() => {
    globalStyles();
  }, []);

  return (
    <BoardProvider>
      <ModalProvider>
        <NewBoardProvider>
          <NewTaskProvider>
            <SidebarProvider>
              <TaskProvider>
                <ThemeProvider>
                  <ApplyTheme>
                    <Header />
                    <Content />
                    <Modal />
                  </ApplyTheme>
                </ThemeProvider>
              </TaskProvider>
            </SidebarProvider>
          </NewTaskProvider>
        </NewBoardProvider>
      </ModalProvider>
    </BoardProvider>
  );
};

export default App;
