import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.scss";

type Props = {
  cartItemsAmount: number;
  onClick: () => void;
};

const HeaderCartButton = ({ cartItemsAmount, onClick }: Props) => {
  return (
    <button className={classes.button} onClick={onClick}>
      <CartIcon className={classes.icon} />
      Your Cart
      <span className={classes.badge}>{cartItemsAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
