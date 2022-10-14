import classes from "./Header.module.scss";
import HeaderCartButton from "./HeaderCartButton";

import mealsImage from "../../assets/meals.jpg";
import { CartItem } from "../../types";

type Props = {
  cartItems: CartItem[] | null;
  onShowCart: () => void;
};

const Header = ({ cartItems, onShowCart }: Props) => {
  // TODO: remove after Context I
  const totalAmount = cartItems
    ? cartItems?.reduce((acc, item) => acc + item.amount, 0)
    : 0;

  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton cartItemsAmount={totalAmount} onClick={onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="meals" />
      </div>
    </>
  );
};

export default Header;
