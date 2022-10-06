import { MouseEventHandler } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./Modal.module.scss";

type Props = {
  title: string;
  message: string;
  onClick: React.MouseEventHandler;
};

const Modal = ({ title, message, onClick }: Props) => {
  return (
    <div className={styles.modalBackdrop} onClick={onClick}>
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
    </div>
  );
};

export default Modal;
