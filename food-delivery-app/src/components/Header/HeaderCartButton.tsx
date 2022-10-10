import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.scss";

const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
      <CartIcon className={classes.icon} />
      Your Cart
    </button>
  );
};

export default HeaderCartButton;
