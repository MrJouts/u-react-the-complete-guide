import Cart from "../../Cart/Cart";
import classes from "./Modal.module.scss";

const Modal = () => {
  return (
    <div>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>
        <Cart />
      </div>
    </div>
  );
};

export default Modal;
