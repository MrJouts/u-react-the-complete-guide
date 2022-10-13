import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.scss";

type Props = {
  cartItemsAmount: number;
  onClick: () => void;
};

const HeaderCartButton = ({ cartItemsAmount, onClick }: Props) => {
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemsAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
