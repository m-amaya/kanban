import { FC } from "react";

import { Sidebar } from "~/components/sidebar";
import { useModalStore } from "~/store";
import type { ModalType } from "~/store/modal.store";
import { styled } from "~/styles";
import { tokens } from "~/tokens";
import { rgba, useMediaQuery } from "~/utils";

const { headerHeightMobile } = tokens.content;

const Overlay = styled("div", {
  backgroundColor: rgba("black", 0.5),
  height: "100vh",
  position: "absolute",
  top: 0,
  right: 0,
  width: "100%",
  zIndex: "$overlay",
  variants: {
    showHeader: {
      true: {
        top: headerHeightMobile,
        height: `calc(100vh - ${headerHeightMobile}px)`,
      },
    },
  },
});

const Content = styled("div", {
  left: "50%",
  position: "absolute",
  top: "50%",
  transform: "translate(-50%)",
  zIndex: "$dialog",
  variants: {
    belowHeader: {
      true: {
        top: headerHeightMobile + 16,
      },
    },
  },
});

const dialog: Record<ModalType, JSX.Element> = {
  boards: <Sidebar />,
};

const Modal: FC = () => {
  const { isGteTablet } = useMediaQuery();
  const { currentModal, modalIsOpen, closeModal } = useModalStore();
  const isBoardModal = currentModal === "boards";

  if (!modalIsOpen || !currentModal) {
    return null;
  }

  if (isBoardModal && isGteTablet) {
    closeModal();
  }

  return (
    <>
      <Overlay showHeader={isBoardModal} onClick={() => closeModal()} />
      <Content belowHeader={isBoardModal}>{dialog[currentModal]}</Content>
    </>
  );
};

export default Modal;
