import classes from "./Cart.module.scss";

type Props = {
  onClick: () => void;
};

const Cart = ({ onClick }: Props) => {
  return (
    <>
      <div className={classes["cart-items"]}></div>
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
