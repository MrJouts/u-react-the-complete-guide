import ReactDOM from "react-dom";
import React from "react";
import classes from "./Modal.module.scss";

type Props = {
  onClose: React.MouseEventHandler;
  children: JSX.Element | JSX.Element[];
};

type BackdropProps = {
  onClose: React.MouseEventHandler;
};

type ModalOverlayProps = {
  children: JSX.Element | JSX.Element[];
};

const Backdrop = ({ onClose }: BackdropProps) => (
  <div className={classes.backdrop} onClick={onClose}></div>
);

const ModalOverlay = ({ children }: ModalOverlayProps): JSX.Element => (
  <div className={classes.modal}>{children}</div>
);

const portalElement = document.getElementById("overlays");

const Modal = ({ onClose, children }: Props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement!)}

      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement!
      )}
    </>
  );
};

export default Modal;
