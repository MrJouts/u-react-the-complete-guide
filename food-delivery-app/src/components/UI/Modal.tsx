import ReactDOM from "react-dom";
import React from "react";
import classes from "./Modal.module.scss";

type Props = {
  onClick: React.MouseEventHandler;
  children: JSX.Element | JSX.Element[];
};

type BackdropProps = {
  onClick: React.MouseEventHandler;
};

type ModalOverlayProps = {
  children: JSX.Element | JSX.Element[];
};

const Backdrop = ({ onClick }: BackdropProps) => (
  <div className={classes.backdrop} onClick={onClick}></div>
);

const ModalOverlay = ({ children }: ModalOverlayProps): JSX.Element => (
  <div className={classes.modal}>{children}</div>
);

const portalElement = document.getElementById("overlays");

const Modal = ({ onClick, children }: Props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={onClick} />, portalElement!)}

      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement!
      )}
    </>
  );
};

export default Modal;
