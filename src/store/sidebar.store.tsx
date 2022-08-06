import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

interface SidebarStore {
  sidebarIsOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext({} as SidebarStore);

export const SidebarProvider: FC<PropsWithChildren> = (props) => {
  const [sidebarIsOpen, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!sidebarIsOpen);
  };

  return (
    <SidebarContext.Provider
      value={{ sidebarIsOpen, toggleSidebar }}
      {...props}
    />
  );
};

export const useSidebarStore = () => useContext(SidebarContext);
