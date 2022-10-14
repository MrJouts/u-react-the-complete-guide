import { CartItem as ICartItem } from "../../types";
import Modal from "../UI/Modal";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";

type Props = {
  cartItems: ICartItem[] | null;
  onClose: () => void;
};

const Cart = ({ cartItems, onClose }: Props) => {
  let total = 0;

  cartItems?.forEach((cart) => {
    total += cart.price * cart.amount;
  });

  return (
    <Modal onClose={onClose}>
      <div className={classes["cart-items"]}>
        {cartItems?.map((cart) => (
          <CartItem key={cart.name} {...cart} />
        ))}
      </div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
