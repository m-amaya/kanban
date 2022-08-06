import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

export type ModalType = "boards";

interface ModalStore {
  modalIsOpen: boolean;
  currentModal: ModalType | null;
  toggleModal: (name: ModalType) => void;
  closeModal: () => void;
}

const ModalContext = createContext({} as ModalStore);

export const ModalProvider: FC<PropsWithChildren> = (props) => {
  const [modalIsOpen, setOpen] = useState(false);
  const [currentModal, setModal] = useState<ModalType | null>(null);

  const toggleModal = (name: ModalType) => {
    if (currentModal === name) {
      setOpen(!modalIsOpen);
    } else {
      setModal(name);
      setOpen(true);
    }
  };

  const closeModal = () => {
    if (currentModal) {
      setOpen(false);
      setModal(null);
    }
  };

  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        currentModal,
        toggleModal,
        closeModal,
      }}
      {...props}
    />
  );
};

export const useModalStore = () => useContext(ModalContext);
