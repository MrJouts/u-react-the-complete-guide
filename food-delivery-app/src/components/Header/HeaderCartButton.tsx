import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.scss";

type Props = {
  cartItemsAmount: number;
};

const HeaderCartButton = ({ cartItemsAmount }: Props) => {
  return (
    <button className={classes.button}>
      <CartIcon className={classes.icon} />
      Your Cart
      <span className={classes.badge}>{cartItemsAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
