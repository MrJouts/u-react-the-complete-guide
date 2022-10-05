import { MouseEventHandler } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./Modal.module.scss";

type Props = {
  onClick: React.MouseEventHandler;
};

const Modal = ({ onClick }: Props) => {
  return (
    <div className={styles.modalBackdrop} onClick={onClick}>
      <Card
        onClick={(e: Event) => {
          e.stopPropagation();
          return false;
        }}
      >
        <div className="cardContent">
          <h2 className={styles.modalTitle}>Title</h2>
          <div className={styles.modalContent}>this is the modal content</div>
          <Button type="button" onClick={onClick}>
            Close
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Modal;
