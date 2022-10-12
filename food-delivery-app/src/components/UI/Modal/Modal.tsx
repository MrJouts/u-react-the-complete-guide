import ReactDOM from "react-dom";
import React from "react";
import Cart from "../../Cart/Cart";
import classes from "./Modal.module.scss";

type Props = {
  onClick: React.MouseEventHandler;
};

type BackdropProps = {
  onClick: React.MouseEventHandler;
};

type ModalOverlayProps = {
  onClick: React.MouseEventHandler;
};

const Backdrop = ({ onClick }: BackdropProps) => (
  <div className={classes.backdrop} onClick={onClick}></div>
);

const ModalOverlay = (): JSX.Element => (
  <div className={classes.modal}>
    <Cart />
  </div>
);

const Modal = ({ onClick }: Props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClick} />,
        document.getElementById("backdrop-root")!
      )}

      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("modal-overlay")!
      )}
    </>
  );
};

export default Modal;
