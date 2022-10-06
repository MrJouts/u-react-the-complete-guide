import { MouseEventHandler, ReactElement, ReactPortal } from "react";
import ReactDOM from "react-dom";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./Modal.module.scss";

type Props = {
  title: string;
  message: string;
  onClick: React.MouseEventHandler;
};

type BackdropProps = {
  onClick: React.MouseEventHandler;
};

type ModalOverlayProps = {
  title: string;
  message: string;
  onClick: React.MouseEventHandler;
};

const Backdrop = ({ onClick }: BackdropProps): JSX.Element => (
  <div className={styles.modalBackdrop} onClick={onClick}></div>
);

const ModalOverlay = ({
  title,
  message,
  onClick,
}: ModalOverlayProps): JSX.Element => (
  <Card
    className={styles.modalCard}
    onClick={(e: Event) => {
      e.stopPropagation();
      return false;
    }}
  >
    <div className="cardContent">
      <h2 className={styles.modalTitle}>{title}</h2>
      <div className={styles.modalContent}>{message}</div>
      <Button type="button" onClick={onClick}>
        Close
      </Button>
    </div>
  </Card>
);

const Modal = ({ title, message, onClick }: Props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClick} />,
        document.getElementById("backdrop-root")!
      )}

      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onClick={onClick} />,
        document.getElementById("modal-overlay")!
      )}
    </>
  );
};

export default Modal;
