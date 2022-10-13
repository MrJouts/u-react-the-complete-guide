import classes from "./CartItem.module.scss";

type Props = {
  name: string;
  amount: number;
  price: number;
};

const CartItem = ({ name, amount, price }: Props) => {
  return (
    <div className={classes["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <div className={classes.price}>${price}</div>
          <div className={classes.amount}>x {amount}</div>
        </div>
      </div>
      <div className={classes.actions}>
        <button> - </button>
        <button> + </button>
      </div>
    </div>
  );
};

export default CartItem;
