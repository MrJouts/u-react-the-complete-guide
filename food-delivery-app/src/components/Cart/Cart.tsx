import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { CartItem as ICartItem } from "../../types";
import { formatPrice } from "../../utils/format-price";
import Modal from "../UI/Modal";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";

type Props = {
  onClose: () => void;
};

const Cart = ({ onClose }: Props) => {
  const cartCtx = useContext(CartContext);
  const hasItems: boolean = cartCtx.totalAmount > 0;

  const cartItemRemoveHandler = (id: string) => {};

  const cartItemAddHandler = (item: ICartItem) => {};

  return (
    <Modal onClose={onClose}>
      <div className={classes["cart-items"]}>
        {cartCtx.items.map((cart) => (
          <CartItem key={cart.name} {...cart} />
        ))}
      </div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{formatPrice(cartCtx.totalAmount)}</span>
      </div>

      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
