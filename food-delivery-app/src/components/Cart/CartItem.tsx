import { MouseEventHandler } from "react";
import { formatPrice } from "../../utils/format-price";
import classes from "./CartItem.module.scss";

type Props = {
  name: string;
  amount: number;
  price: number;
  onAdd: () => void;
  onRemove: () => void;
};

const CartItem = ({ name, amount, price, onAdd, onRemove }: Props) => {
  return (
    <div className={classes["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <div className={classes.price}>{formatPrice(price)}</div>
          <div className={classes.amount}>x {amount}</div>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}> - </button>
        <button onClick={onAdd}> + </button>
      </div>
    </div>
  );
};

export default CartItem;
