import { CartItem as ICartItem } from "../../types";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";

type Props = {
  cartItems: ICartItem[];
  onClick: () => void;
};

const Cart = ({ cartItems, onClick }: Props) => {
  return (
    <>
      <div className={classes["cart-items"]}>
        {cartItems.map((cart) => (
          <CartItem key={cart.name} {...cart} />
        ))}
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onClick}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </>
  );
};

export default Cart;
